import React, { useEffect, useState } from 'react';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/movies" element={<MovieForm/>}/>
          <Route path="/" element={<h1>HOME</h1>}/>
          <Route path="/users" element={<h1>USERS</h1>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
