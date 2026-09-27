import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PortfolioAnalytics from './PortfolioAnalytics'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PortfolioAnalytics />
  </React.StrictMode>,
)
