import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SongDetail() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSong() {
      try {
        const response = await axios(`http://localhost:5000/songs/${id}`);
        setSong(response.data);
      } catch (err) {
        console.error(err);
        setError('Could not load song.');
      } finally {
        setIsLoading(false);
      }
    }

    getSong();
  }, [id]);

  // Patch -> method from the axios HTTP client library that sends an HTTP PATCH request to a server.
  // Used to update part of a resource, not replace the whole resource.
  async function updateLikes(amount) {
    try {
      const response = await axios.patch(`http://localhost:5000/songs/${id}/likes`, { amount });
      setSong(response.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Could not update likes.');
    }
  }

  return (
    <div className="songs-page">
      <Link className="back-link" to="/songs">Back to songs</Link>

      {isLoading && <p className="status-message">Loading song...</p>}
      {error && <p className="status-message error-message">{error}</p>}

      {song && (
        <article className="song-card song-detail-card">
          <h1>{song.song}</h1>
          <p className="song-artist">{song.artist}</p>
          <p className="song-likes">{song.likes ?? 0} likes</p>
          <div className="song-actions">
            <button type="button" onClick={() => updateLikes(1)}>Like</button>
            <button type="button" onClick={() => updateLikes(-1)}>Dislike</button>
          </div>
        </article>
      )}
    </div>
  );
}
