import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import ResumePage from './pages/resume/ResumePage';
import { WelcomePage } from './pages/welcome/WelcomePage';

function App() {
  return (
    <>
      
      <div>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
