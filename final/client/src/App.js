import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth';

export default function App() {

  const LandingP = Auth(LandingPage, null);
  const LoginP = Auth(LoginPage, false);
  const RegisterP = Auth(RegisterPage, false);

  return (
    <Router>
      <div>
        <Routes>

          <Route exact path="/" element={<LandingP />} />
          <Route exact path="/login" element={<LoginP />} />
          <Route exact path="/register" element={<RegisterP />} />
        </Routes>
      </div>
    </Router>
  );
}

