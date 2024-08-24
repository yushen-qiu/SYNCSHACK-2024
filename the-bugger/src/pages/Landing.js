import React from 'react';


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full py-4 bg-blue-500 text-white text-center">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">Log in</button>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold mb-6">The Bugger</h1>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Code"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Join</button>
        </div>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
          Create your own room
        </button>
      </main>
    </div>
  );
};

export default LandingPage;
