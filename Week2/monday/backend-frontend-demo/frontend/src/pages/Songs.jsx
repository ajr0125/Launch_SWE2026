import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Songs() {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getSongs() {
            try {
                const response = await axios('http://localhost:5000/songs');
                setSongs(response.data);
            } catch (err) {
                console.error(err);
                setError('Could not load songs.');
            } finally {
                setIsLoading(false);
            }
        }

        getSongs();
    }, []);

    async function updateLikes(id, amount) {
        try {
            const response = await axios.patch(`http://localhost:5000/songs/${id}/likes`, { amount });
            setSongs((currentSongs) =>
                currentSongs.map((song) => song.id === id ? response.data : song)
            );
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Could not update likes.');
        }
    }

    return (
        <div className="songs-page">
            <header className="songs-header">
                <h1>Songs</h1>
            </header>

            {isLoading && <p className="status-message">Loading songs...</p>}
            {error && <p className="status-message error-message">{error}</p>}
            {!isLoading && !error && songs.length === 0 && <p className="status-message">No songs found yet.</p>}

            <div className="songs-grid">
                {songs.map(song => (
                    <article className="song-card" key={song.id}>
                        <h2>{song.song}</h2>
                        <p className="song-artist">{song.artist}</p>
                        <p className="song-likes">{song.likes ?? 0} likes</p>
                        <div className="song-actions">
                            <button type="button" onClick={() => updateLikes(song.id, 1)}>Like</button>
                            <button type="button" onClick={() => updateLikes(song.id, -1)}>Dislike</button>
                            <Link to={`/songs/${song.id}`}>Details</Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
