import React, { useEffect, useState } from 'react';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import Users from './components/Users';
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
            <Route path="/movies" element={<MovieForm/>}/>
            <Route path="/" element={<h1>HOME</h1>}/>
            <Route path="/users" element={<Users/>}/>
          
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
