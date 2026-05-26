import axios from 'axios'
import { createContext, useCallback, useContext, useState } from 'react'

export const AuthContext = createContext(null)
const savedUserKey = 'songs_app_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = window.localStorage.getItem(savedUserKey)
    try {
      return savedUser ? JSON.parse(savedUser) : null
    } catch {
      window.localStorage.removeItem(savedUserKey)
      return null
    }
  })

  const saveUser = useCallback((nextUser) => {
    setUser(nextUser)
    window.localStorage.setItem(savedUserKey, JSON.stringify(nextUser))
  }, [])

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:5000/auth/login', {
      username,
      password,
    })

    saveUser(response.data)
    return response.data
  }

  const loginWithSpotify = () => {
    window.location.href = 'http://127.0.0.1:5000/auth/spotify'
  }

  const completeSpotifyLogin = useCallback((spotifyUser) => {
    saveUser(spotifyUser)
  }, [saveUser])

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem(savedUserKey)
  }

  const value = {
    user,
    login,
    loginWithSpotify,
    completeSpotifyLogin,
    logout,
    isAuthenticated: Boolean(user),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
