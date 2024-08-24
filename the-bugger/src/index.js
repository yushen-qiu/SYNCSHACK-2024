import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from './pages/Lobby'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="lobby" element={<Lobby />}></Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: "/", element: React.createElement(App, null) }),
        React.createElement(Route, { path: "/lobby", element: React.createElement(Lobby, null) }) // Ensure Lobby is imported
      )
    )
  )
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
