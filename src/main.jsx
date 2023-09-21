import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import Results from './pages/Results.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" index element={<App />} />
    <Route path="/results" element={<Results/>} />
  </Routes>
</BrowserRouter>
)
