// Import the express module
const express=require('express');
// Create an instance of the express application
const cors = require('cors')
require('dotenv').config();
const db = require('./firebase');
const { collection, doc, getDoc, getDocs, increment, updateDoc } = require('firebase/firestore');

const app=express();
// Specify a port number for the server
app.use(cors())
// use middleware to parse json request bodies
app.use(express.json());
const port=process.env.PORT || 5000;

app.get('/songs', async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, 'songs'));
    const songs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(songs);
  } catch (error) {
    console.error('Error getting songs:', error);
    res.status(500).json({ message: 'Error getting songs' });
  }
});

app.get('/songs/:id', async (req, res) => {
  try {
    const songDoc = await getDoc(doc(db, 'songs', req.params.id));

    if (!songDoc.exists) {
      return res.status(404).json({ message: 'Song not found' });
    }

    res.status(200).json({
      id: songDoc.id,
      ...songDoc.data(),
    });
  } catch (error) {
    console.error('Error getting song:', error);
    res.status(500).json({ message: 'Error getting song' });
  }
});

//adding to the database
//same route as the get from earlier bit that okay since they are different http methods
app.post('/songs', (req, res) => {
  res.status(501).json({ message: 'Adding songs is not set up yet' });
});

app.patch('/songs/:id/likes', async (req, res) => {
  const { amount } = req.body;

  if (amount !== 1 && amount !== -1) {
    return res.status(400).json({ message: 'Amount must be 1 or -1' });
  }

  try {
    const songRef = doc(db, 'songs', req.params.id);
    const songDoc = await getDoc(songRef);

    if (!songDoc.exists) {
      return res.status(404).json({ message: 'Song not found' });
    }

    await updateDoc(songRef, {
      likes: increment(amount),
    });

    const updatedSong = await getDoc(songRef);

    res.status(200).json({
      id: updatedSong.id,
      ...updatedSong.data(),
    });
  } catch (error) {
    console.error('Error updating likes:', error);
    res.status(500).json({
      message: 'Error updating likes',
      error: error.message,
      code: error.code,
    });
  }
});

// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
