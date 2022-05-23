import React from 'react';
import Navbar from './components/Navbar';
import routes from './routes';
import {
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
            {routes.map(route => {
              return (
                <Route key={route.path} 
                path={route.path} 
                element={<route.component/>}
                />
              )
            })}
          
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
