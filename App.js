import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import VolSignup from './pages/VolSignup';
import SeekSignup from './pages/SeekSignup'
import Navigator from './navigation/homeStack'
export default function App() {



  return (
    <Navigator />
    // <Home />
    //  <Login />
    // <VolSignup />
    //  <SeekSignup />
  );
  
  }

