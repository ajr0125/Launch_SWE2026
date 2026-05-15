import { NavLink, Routes, Route } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="app-shell">
      <AppBar position="static" color="transparent" elevation={0} className="app-bar">
        <div className="toolbar">
          <div>
            <p className="brand-label">Skincare Co.</p>
            <h1>Solace Skin</h1>
          </div>

          <nav className="site-nav">
            <Button component={NavLink} to="/" end className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>
              Home
            </Button>
            <Button component={NavLink} to="/about" className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>
              About
            </Button>
            <Button component={NavLink} to="/contact" className={({ isActive }) => (isActive ? 'nav-button active' : 'nav-button')}>
              Contact
            </Button>
          </nav>
        </div>
      </AppBar>

      {/* URL will update when you click a link */}
      <main className="route-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
