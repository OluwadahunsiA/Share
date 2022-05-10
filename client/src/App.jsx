import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Homepage />
    </div>
  );
};

export default App;
