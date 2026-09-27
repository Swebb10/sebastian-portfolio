import test from 'node:test'
import assert from 'node:assert/strict'
import { OWNER_KEY, initializeAnalytics, filterAnalyticsEvent } from './analytics.js'

function browser(href = 'https://portfolio.example/', stored = {}) {
  const values = new Map(Object.entries(stored))
  return {
    location: { href },
    localStorage: {
      getItem: key => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
      removeItem: key => values.delete(key),
    },
    history: { state: null, replaceState(_state, _title, path) { this.path = path } },
  }
}
const event = { type: 'pageview', url: 'https://portfolio.example/?email=private@example.com#projects' }

test('owner is excluded on first visit and subsequent normal visits', () => {
  const client = browser('https://portfolio.example/?analytics=off#hero')
  const state = initializeAnalytics(client)
  assert.deepEqual(state, { excluded: true, persisted: true })
  assert.equal(client.history.path, '/#hero')
  assert.equal(filterAnalyticsEvent(event, client, state, true), null)
  client.location.href = 'https://portfolio.example/'
  assert.equal(initializeAnalytics(client).excluded, true)
})

test('explicit reactivation removes owner preference', () => {
  const client = browser('https://portfolio.example/?analytics=on', { [OWNER_KEY]: '1' })
  assert.equal(initializeAnalytics(client).excluded, false)
  assert.equal(client.localStorage.getItem(OWNER_KEY), null)
})

test('ordinary visits are allowed only in production, with clean URLs', () => {
  const client = browser()
  const state = initializeAnalytics(client)
  assert.equal(filterAnalyticsEvent(event, client, state, false), null)
  assert.deepEqual(filterAnalyticsEvent(event, client, state, true), {
    type: 'pageview', url: 'https://portfolio.example/',
  })
  assert.equal(event.url.includes('email='), true)
})

test('another tab can exclude an already-open page', () => {
  const client = browser()
  const state = initializeAnalytics(client)
  client.localStorage.setItem(OWNER_KEY, '1')
  assert.equal(filterAnalyticsEvent(event, client, state, true), null)
})

test('blocked storage never counts an owner or crashes the portfolio', () => {
  const client = browser('https://portfolio.example/?analytics=off')
  Object.defineProperty(client, 'localStorage', { get() { throw new Error('Blocked') } })
  assert.deepEqual(initializeAnalytics(client), { excluded: true, persisted: false })
  assert.equal(filterAnalyticsEvent(event, client, { excluded: false }, true), null)
})
