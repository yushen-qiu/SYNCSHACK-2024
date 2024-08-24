import React from 'react';

// Player component
const Player = ({ name, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg mb-2">
      <p className="text-lg font-semibold">{name}</p>
      <button
        onClick={() => onRemove(name)}
        className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default Player;
