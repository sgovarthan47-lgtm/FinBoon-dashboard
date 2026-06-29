import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './layouts/Layout'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Router>
      <Routes>
        <Route element={<Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route path="/" element={<Dashboard />} />
          {/* Additional routes will be added here */}
        </Route>
      </Routes>
    </Router>
  )
}
