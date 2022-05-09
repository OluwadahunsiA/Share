import React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Homepage />
    </>
  );
};

export default App;
