import { useState } from 'react';

export default function FindProfessional() {
  const [profession, setProfession] = useState('');
  const [results, setResults]     = useState([]);
  const [error, setError]         = useState('');

  const handleSearch = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        fetch('http://localhost:5000/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            profession,
            lat: coords.latitude,
            lng: coords.longitude
          })
        })
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(() => setError('Network error'));
      },
      err => setError(err.message)
    );
  };

  return (
    <div>
      <h2>I Need Help</h2>
      <select value={profession} onChange={e => setProfession(e.target.value)}>
        <option value="">Select profession…</option>
        <option value="doctor">Doctor</option>
        <option value="welder">Welder</option>
        {/* add more options */}
      </select>
      <button onClick={handleSearch} disabled={!profession}>
        Search Nearest
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {results.map((p) => (
          <li key={p.id}>
            {p.name} &mdash; {p.distance_km} km away
          </li>
        ))}
      </ul>
    </div>
  );
}