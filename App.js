import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import VolSignup from './pages/VolSignup';
import SeekSignup from './pages/SeekSignup'
import Navigator from './navigation/homeStack'
import DateTime from './pages/DateTime'
import Profile from './pages/Profile'
import firebase from 'firebase'
export default function App() {
  console.disableYellowBox = true;

  

  return (

   
    // <DateTime />
    // <Profile />
    <Navigator />
    // <Home />
    //  <Login />
    // <VolSignup />
    //  <SeekSignup />
  );
  
  }

