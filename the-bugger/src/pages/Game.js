// src/pages/GamePage.js
import React from 'react';

function GamePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-seashell p-4">
    {/* Header */}
    <div className="flex justify-between items-center px-10 py-4">
      <div className="text-4xl font-bold text-center w-fit">
        NAME PLACEHOLDER
      </div>

      <div id='instructions' className="bg-rose-taupe text-white text-lg text-center w-1/2 py-3 rounded-lg mr-4">
            Code a calculator
      </div>

      <div className="flex items-center">

        <div id='gamecode' className="bg-rose-taupe text-white px-6 py-3 rounded-lg mr-4">
            #00000
        </div>
        <button className="bg-wenge text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800">
            Leave
=======
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
>>>>>>> 2f3937d (Game page)
        </button>
      </div>
    </div>

<<<<<<< HEAD
    <div class="flex justify-center items-start space-x-4 p-8 bg-seashell h-[calc(100vh-10rem)]">
    <div class="w-3/4 bg-dessert-sand rounded-lg shadow-md h-[calc(100vh-10rem)]">Code editor</div>

    <div class="w-1/4 bg-dessert-sand rounded-lg shadow-md h-[calc(100vh-10rem)]">Chat</div>
    </div>

=======
    <div className="game-page p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Welcome to the Game Page</h1>
      {/* Add your game logic and components here */}
    </div>
>>>>>>> 2f3937d (Game page)
    </div>
  );
}

export default GamePage;
