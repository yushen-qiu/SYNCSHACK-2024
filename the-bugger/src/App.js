import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />}   />
          <Route path="/home" element={<LandingPage />}   />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
