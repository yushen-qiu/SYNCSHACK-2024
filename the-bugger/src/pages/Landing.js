import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  // upon clicking join 
  const handleJoinClick = () => {
    navigate('/lobby'); 
  };

  return React.createElement(
    'div',
    { className: 'flex flex-col items-center justify-center min-h-screen bg-[#faf4ef]' },
    React.createElement(
      'main',
      { className: 'flex flex-col items-center mt-6' },
      React.createElement('h1', { className: 'text-8xl font-semibold mb-16 text-[#5f5f5f]' }, 'The Bugger'),
      React.createElement(
        'div',
        { className: 'w-full flex justify-center items-center space-x-4' },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Code',
          className: 'px-4 py-2 border-none rounded-full bg-[#a16667] text-white text-center placeholder-white placeholder-opacity-50 focus:outline-none'
        }),
        React.createElement('button', {
          className: 'w-24 bg-[#d8b494] text-white px-4 py-2 rounded-full',
          onClick: handleJoinClick  
        }, 'Join')
      ),
      React.createElement(
        'button',
        { className: 'mt-8 w-80 bg-[#d8b494] text-white px-4 py-2 rounded-full',
        onClick: handleJoinClick  
        },
        'Create your own room'
      )
    )
  );
}


export default Landing;
