import { Analytics } from '@vercel/analytics/react'
import { filterAnalyticsEvent, initializeAnalytics } from './analytics'

const state = initializeAnalytics(window)
const beforeSend = event => filterAnalyticsEvent(event, window, state, __ANALYTICS_ENABLED__)

export default function PortfolioAnalytics() {
  if (state.excluded) {
    return <aside className="analytics-owner-notice" aria-label="Preferencia de estadísticas">
      <span><strong>Tus visitas no se cuentan.</strong> {state.persisted
        ? 'Modo propietario activo en este navegador.'
        : 'No se pudo guardar la preferencia. Vuelve a abrir tu enlace de exclusión en futuras visitas.'}</span>
      {state.persisted && <a href="?analytics=on">Volver a contar mis visitas</a>}
    </aside>
  }
  return __ANALYTICS_ENABLED__ ? <Analytics mode="production" beforeSend={beforeSend} /> : null
}
