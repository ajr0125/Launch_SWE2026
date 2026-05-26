import { Outlet, NavLink } from 'react-router-dom'
import { useAuth } from './context/AuthProvider.jsx'
import './App.css'

function App() {
  const { user, loginWithSpotify, logout, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className='login-page'>
        <h1>Welcome to the songs website</h1>
        <p>Sign in with Spotify to access songs and details.</p>
        <section className='auth-bar'>
          <button className='spotify-button' type='button' onClick={loginWithSpotify}>
            Continue with Spotify
          </button>
        </section>
      </div>
    )
  }

  return (
    <div>
      <nav className='app-nav'>
        <div className='nav-links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/songs'>Songs</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
        </div>

        <div className='nav-auth'>
          <span>Signed in as {user.username}</span>
          <button className='auth-button' type='button' onClick={logout}>
            Logout
          </button>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
