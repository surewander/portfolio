import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/space-grotesk';
import PortfolioPage from './components/PortfolioPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <PortfolioPage />
  </React.StrictMode>,
)
