import express from 'express';

import { fetchAllSongs, fetchSongById, updateSongLikes } from '../db/songs.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const songs = await fetchAllSongs();

    res.status(200).json(songs);
  } catch (error) {
    console.error('Error getting songs:', error);
    res.status(500).json({ message: 'Error getting songs' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const song = await fetchSongById(req.params.id);

    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    res.status(200).json(song);
  } catch (error) {
    console.error('Error getting song:', error);
    res.status(500).json({ message: 'Error getting song' });
  }
});

router.patch('/:id/likes', async (req, res) => {
  const { amount } = req.body;

  if (amount !== 1 && amount !== -1) {
    return res.status(400).json({ message: 'Amount must be 1 or -1' });
  }

  try {
    const updatedSong = await updateSongLikes(req.params.id, amount);

    if (!updatedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }

    res.status(200).json(updatedSong);
  } catch (error) {
    console.error('Error updating likes:', error);
    res.status(500).json({
      message: 'Error updating likes',
      error: error.message,
      code: error.code,
    });
  }
});

export default router;
