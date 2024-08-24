import { Link } from "react-router-dom";
import React, { useState } from 'react';
import PlayerList from "./PlayerList";

function Lobby({ players }) {
    const [timer, setTimer] = useState('');
    const [numberOfBugs, setNumberOfBugs] = useState('');
    const [difficulty, setDifficulty] = useState('');
    return (
        <div>
            {/* header */}
            <div className="flex">
                <p className="text-8xl flex-1">Lobby</p>
                <div className="flex-1 flex justify-end">
                    <Link to="/" className="content-center">
                    <p className="btn btn-wenge">Leave</p>
                    </Link>
                </div>
            </div>


            
            <div className="flex">
                {/* player list */}
                <div className="bg-rose-taupe flex-1">
                    <PlayerList />
                </div>

                {/* settings */}
                <div className="bg-desert-sand flex-1 flex">
                    <p>Settings</p>
                    {/* timer */}
                    {/* number of bugger */}
                    {/* difficulty */}
                    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>
      <form>
        {/* Timer */}
        <div className="mb-4">
          <label htmlFor="timer" className="block text-gray-700 mb-1">Timer (in minutes)</label>
          <input
            type="number"
            id="timer"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            placeholder="Enter timer duration"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Number of Bugs */}
        <div className="mb-4">
          <label htmlFor="numberOfBugs" className="block text-gray-700 mb-1">Number of Bugs</label>
          <input
            type="number"
            id="numberOfBugs"
            value={numberOfBugs}
            onChange={(e) => setNumberOfBugs(e.target.value)}
            placeholder="Enter number of bugs"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Difficulty */}
{/* Difficulty */}
<div className="mb-4">
          <label className="block text-gray-700 mb-1">Difficulty</label>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setDifficulty('easy')}
              className={`py-2 px-4 rounded-lg text-white font-bold ${difficulty === 'easy' ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              Easy
            </button>
            <button
              type="button"
              onClick={() => setDifficulty('medium')}
              className={`py-2 px-4 rounded-lg text-white font-bold ${difficulty === 'medium' ? 'bg-yellow-500' : 'bg-gray-300'}`}
            >
              Medium
            </button>
            <button
              type="button"
              onClick={() => setDifficulty('hard')}
              className={`py-2 px-4 rounded-lg text-white font-bold ${difficulty === 'hard' ? 'bg-red-500' : 'bg-gray-300'}`}
            >
              Hard
            </button>
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Settings
        </button>
      </form>
    </div>
                </div>

            </div>
        </div>

    )
}

export default Lobby;