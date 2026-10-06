import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('hi everyone (from React)');

  useEffect(() => {
    fetch('http://localhost:3001/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Failed to fetch from backend', err));
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
      <p>Node.js & React Repo Initial Project Setup</p>
    </div>
  );
}

export default App;
