import React from 'react';


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf4ef]">
      <main className="flex flex-col items-center mt-10">
        <h1 className="text-6xl font-semibold mb-6 text-[#5f5f5f]">The Bugger</h1>
        <div className="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Code"
            className="px-4 py-2 border-none rounded-full bg-[#a16667] text-white text-center placeholder-white placeholder-opacity-50 focus:outline-none"
          />
          <button className="bg-[#d8b494] text-white px-6 py-2 rounded-full">
            Join
          </button>
        </div>
        <button className="mt-6 bg-[#d8b494] text-white px-8 py-3 rounded-full">
          Create your own room
        </button>
      </main>
    </div>
  );
};
export default LandingPage;
