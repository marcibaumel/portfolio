import React from 'react';
import './App.css';
import { Header } from './components/Header';
import ResumePage from './pages/resume/ResumePage';

function App() {
  return (
    <>
      <Header />
      <div>
        <ResumePage />
      </div>

    </>
  );
}

export default App;
