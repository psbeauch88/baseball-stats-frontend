import React, { useEffect, useState } from 'react';
import { getPlayers } from './api';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers()
      .then(response => setPlayers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Player Statistics</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - {player.team} - {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
