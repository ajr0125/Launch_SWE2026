import { useAuth } from '../context/AuthProvider.jsx'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className='profile-page'>
      <h1>User Profile</h1>
      {user.imageUrl && <img className='profile-image' src={user.imageUrl} alt='' />}
      <p>Username: <strong>{user.username}</strong></p>
      <p>User ID: <strong>{user.id}</strong></p>
      {user.email && <p>Email: <strong>{user.email}</strong></p>}
      {user.provider && <p>Provider: <strong>{user.provider}</strong></p>}
    </div>
  )
}
