import { collection, doc, getDoc, getDocs, increment, updateDoc } from 'firebase/firestore';

import db from '../firebase.js';

export const fetchAllSongs = async () => {
  const querySnapshot = await getDocs(collection(db, 'songs'));
  return querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

export const fetchSongById = async (id) => {
  const songSnapshot = await getDoc(doc(db, 'songs', id));

  if (!songSnapshot.exists()) {
    return null;
  }

  return {
    id: songSnapshot.id,
    ...songSnapshot.data(),
  };
};

export const updateSongLikes = async (id, amount) => {
  const songRef = doc(db, 'songs', id);
  const songSnapshot = await getDoc(songRef);

  if (!songSnapshot.exists()) {
    return null;
  }

  await updateDoc(songRef, {
    likes: increment(amount),
  });

  return fetchSongById(id);
};
