import React from 'react';


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf4ef]">
      <main className="flex flex-col items-center mt-10">
      <h1 className="text-8xl font-semibold mb-16 text-[#5f5f5f]">The Bugger</h1>
        <div className="w-80 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Code"
            className="flex-grow px-4 py-2 border-none rounded-full bg-[#a16667] text-white text-center placeholder-white placeholder-opacity-50 focus:outline-none"
          />
          <button className="w-24 bg-[#d8b494] text-white px-4 py-2 rounded-full">
            Join
          </button>
        </div>
        <button className="mt-4 w-80 bg-[#d8b494] text-white px-4 py-2 rounded-full">
          Create your own room
        </button>
      </main>
    </div>
  );
};

export default LandingPage;
