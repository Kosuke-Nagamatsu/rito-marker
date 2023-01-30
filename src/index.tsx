import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ShapeMarkerProvider } from './components/providers/ShapeMarkerProvider'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ShapeMarkerProvider>
      <App />
    </ShapeMarkerProvider>
  </React.StrictMode>
)
