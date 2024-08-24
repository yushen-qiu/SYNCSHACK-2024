import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Lobby from "./pages/Lobby";
import Landing from "./pages/Landing";
import Game from "./pages/Game";
import { Router, Routes, Route } from "react-router-dom";


function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Landing, null)
  );
}

export default App;
