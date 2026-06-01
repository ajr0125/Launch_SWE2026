import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import SongDetail from './pages/SongDetail.jsx'
import Songs from './pages/Songs.jsx'
import SpotifyCallback from './pages/SpotifyCallback.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/spotify/callback",
    element: <SpotifyCallback />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "songs",
        element: <Songs />
      },
      {
        path: "songs/:id",
        element: <SongDetail />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
