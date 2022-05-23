import React, { useEffect, useState } from 'react';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Home from './components/Home';
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
        <div className="px-5">
          <Routes>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<Users/>}/>
          
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
