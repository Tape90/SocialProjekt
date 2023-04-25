import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../scss/index.css'
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
