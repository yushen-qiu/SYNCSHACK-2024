// src/pages/GamePage.js
import React from 'react';

function GamePage() {
  return (
    <div className="min-h-screen bg-seashell p-4">
    {/* Header */}
    <div className="flex justify-between items-center px-10 py-4">
      <div className="text-2xl font-bold text-center">
        NAME PLACEHOLDER
      </div>

      <div id='instructions' className="bg-rose-taupe text-white text-lg px-20 py-3 rounded-lg mr-4">
            Code a calculator
      </div>

      <div className="flex items-center">

        <div id='gamecode' className="bg-rose-taupe text-white px-6 py-3 rounded-lg mr-4">
            #00000
        </div>
        <button className="bg-wenge text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-800">
            Leave
        </button>
      </div>
    </div>

    <div class="flex justify-center items-start space-x-4 p-8 bg-seashell h-[calc(100vh-10rem)]">
    <div class="w-2/3 bg-dessert-sand rounded-lg shadow-md h-[calc(100vh-10rem)]">Code editor</div>

    <div class="w-1/3 bg-dessert-sand rounded-lg shadow-md h-[calc(100vh-10rem)]">Chat</div>
    </div>

    </div>
  );
}

export default GamePage;
