import { collection, getDocs, query, where } from 'firebase/firestore'

import db from '../firebase.js'

export const findUserByUsername = async (username) => {
  const usersCollection = collection(db, 'users')
  const usersQuery = query(usersCollection, where('username', '==', username))
  const querySnapshot = await getDocs(usersQuery)

  if (querySnapshot.empty) {
    return null
  }

  const userDoc = querySnapshot.docs[0]
  return {
    id: userDoc.id,
    ...userDoc.data(),
  }
}

export const validateUser = async (username, password) => {
  const user = await findUserByUsername(username)
  if (!user || user.password !== password) {
    return null
  }
  return user
}
