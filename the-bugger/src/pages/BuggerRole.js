import React from 'react';

// function BuggerRole() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-neutral-900">
//       <h1 className="text-red-700 text-9xl">Bugger</h1>
//     </div> 
//   );
// }

// export default BuggerRole;
const CircleState = {
  EMPTY: 'empty',
  GREEN: 'green',
  RED: 'red',
};

function CircleComponent({ fill }) {
  let circleClasses = 'w-16 h-16 rounded-full flex items-center justify-center border-4';
  circleClasses += ' border-gray-600';
  if (fill === CircleState.GREEN) {
    circleClasses += ' bg-green-600'; // Filled green
  } else if (fill === CircleState.RED) {
    circleClasses += ' bg-red-500'; // Filled red
  } 

  return <div className={circleClasses}></div>;
}

function CircleContainer() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      <CircleComponent fill={CircleState.EMPTY} />
      <CircleComponent fill={CircleState.GREEN} />
      <CircleComponent fill={CircleState.RED} />
      <CircleComponent fill={CircleState.EMPTY} />
      <CircleComponent fill={CircleState.GREEN} />
    </div>
  );
}

export default CircleContainer;