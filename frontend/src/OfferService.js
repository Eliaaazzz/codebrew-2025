import { useState } from 'react';

export default function OfferService() {
  const [name, setName]         = useState('');
  const [profession, setProf]   = useState('');
  const [message, setMessage]   = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!navigator.geolocation) {
      setMessage('Geolocation not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      fetch('http://localhost:5000/api/professionals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          profession,
          lat: coords.latitude,
          lng: coords.longitude
        })
      })
      .then(res => {
        if (res.ok) setMessage('You are now registered as available.');
        else setMessage('Registration failed.');
      })
      .catch(() => setMessage('Network error'));
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>I Can Help</h2>
      <input
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <select
        value={profession}
        onChange={e => setProf(e.target.value)}
        required
      >
        <option value="">Select profession…</option>
        <option value="doctor">Doctor</option>
        <option value="welder">Welder</option>
        {/* add more options */}
      </select>
      <button type="submit">Go Available</button>
      {message && <p>{message}</p>}
    </form>
  );
}