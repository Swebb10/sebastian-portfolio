export const OWNER_KEY = 'portfolio:exclude-analytics'

// Run before React mounts so the owner's very first visit is excluded too.
export function initializeAnalytics(browser) {
  const url = new URL(browser.location.href)
  const preference = url.searchParams.get('analytics')
  let excluded = false
  let persisted = true
  try {
    if (preference === 'off') browser.localStorage.setItem(OWNER_KEY, '1')
    if (preference === 'on') browser.localStorage.removeItem(OWNER_KEY)
    excluded = browser.localStorage.getItem(OWNER_KEY) === '1'
  } catch {
    persisted = false
    // If storage is blocked, avoid accidentally counting an owner's visit.
    excluded = true
  }

  if (preference === 'off' || preference === 'on') {
    url.searchParams.delete('analytics')
    browser.history.replaceState(browser.history.state, '', url.pathname + url.search + url.hash)
  }

  return { excluded, persisted }
}

export function filterAnalyticsEvent(event, browser, initialState, enabled) {
  if (!enabled || initialState.excluded) return null
  try {
    // Also honor exclusion enabled in another tab after this page loaded.
    if (browser.localStorage.getItem(OWNER_KEY) === '1') return null
  } catch {
    return null
  }
  const url = new URL(event.url)
  // This portfolio needs no query-string or fragment data for page counts.
  url.search = ''
  url.hash = ''
  return { ...event, url: url.href }
}
