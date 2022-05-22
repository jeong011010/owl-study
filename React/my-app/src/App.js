import React, { useEffect, useState } from 'react';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<MovieForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
