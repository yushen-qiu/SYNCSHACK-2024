import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lobby from "./pages/Lobby";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import BuggerRole from './pages/BuggerRole';

// function App() {
//   return (
//     <div className="">
//       <header className="bg-slate-400">
//         <p className='text-red-500'>Test</p>
//       </header>
//     </div>
//   );
// }

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(BuggerRole, null)
  );
}

export default App;
