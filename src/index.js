import React from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './styles/index.css'
import App from './App'
import store from './store'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
