import React, { useState } from 'react';
import Player from './Player'; // Adjust the path as needed

const PlayerList = () => {
  const [players, setPlayers] = useState(['Player 1', 'Player 2', 'Player 3']);
  const [newPlayer, setNewPlayer] = useState('');

  const handleRemove = (name) => {
    setPlayers(players.filter(player => player !== name));
  };

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (newPlayer.trim() === '') return;
    setPlayers([...players, newPlayer]);
    setNewPlayer('');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Player List</h2>
      
      {/* Player List */}
      <div className="mb-4">
        {players.length === 0 ? (
          <p>No players joined yet.</p>
        ) : (
          players.map((player, index) => (
            <Player key={index} name={player} onRemove={handleRemove} />
          ))
        )}
      </div>

      {/* Add Player Form */}
      <form onSubmit={handleAddPlayer} className="flex items-center space-x-2">
        <input
          type="text"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
          placeholder="Enter player name"
          className="border border-gray-300 rounded-lg py-2 px-4 flex-1 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Player
        </button>
      </form>
    </div>
  );
};

export default PlayerList;
