import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context.jsx'
import HeroContext from './context/HeroContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HeroContext>
      <App />
    </HeroContext>   
    </BrowserRouter>
  </React.StrictMode>,
)
