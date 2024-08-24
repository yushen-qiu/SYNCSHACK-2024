// src/pages/GamePage.js
import React from 'react';

function GamePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
    {/* Header */}
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
      <div className="text-2xl font-bold text-center">
        NAME PLACEHOLDER
      </div>
      <div className="flex items-center">
        <div className="bg-red-500 text-white px-4 py-2 rounded-full mr-4">
          #00000
        </div>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800">
          Leave
        </button>
      </div>
    </div>

    <div className="game-page p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Welcome to the Game Page</h1>
      {/* Add your game logic and components here */}
    </div>
    </div>
  );
}

export default GamePage;
