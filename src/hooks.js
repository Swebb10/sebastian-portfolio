import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') return stored
    } catch { /* Use the system preference when storage is unavailable. */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* Theme still works without storage. */ }
  }, [theme])
  return { theme, toggleTheme: () => setTheme(current => current === 'dark' ? 'light' : 'dark') }
}

export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    items.forEach(item => { item.classList.add('reveal-pending'); observer.observe(item) })
    return () => { observer.disconnect(); items.forEach(item => item.classList.remove('reveal-pending')) }
  }, [])
}

export function useScrollScene() {
  useEffect(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      const distance = root.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll-progress', distance > 0 ? window.scrollY / distance : 0)
      root.style.setProperty('--hero-drift', `${reduced.matches ? 0 : Math.min(window.scrollY, window.innerHeight) * 0.16}px`)
      frame = 0
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    reduced.addEventListener('change', schedule)
    update()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      reduced.removeEventListener('change', schedule)
    }
  }, [])
}
