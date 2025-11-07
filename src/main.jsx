import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bookings from './Bookings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bookings />
  </StrictMode>,
)
