import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './HomePage';
import ListYourProperty from './ListYourProperty'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-your-property" element={<ListYourProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;