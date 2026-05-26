import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useAuth } from './context/AuthProvider.jsx'
import './App.css'

function App() {
  const { user, login, loginWithSpotify, logout, isAuthenticated } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(username, password)
      setUsername('')
      setPassword('')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid username or password')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className='login-page'>
        <h1>Welcome to the songs website</h1>
        <p>Please sign in to access songs and details.</p>
        <section className='auth-bar'>
          <form className='login-form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className='auth-button' type='submit' disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Login'}
            </button>
          </form>

          <div className='auth-divider'>or</div>

          <button className='spotify-button' type='button' onClick={loginWithSpotify}>
            Continue with Spotify
          </button>

          {error && <p className='error-message'>{error}</p>}
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
