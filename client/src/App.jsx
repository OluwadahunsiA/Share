import React from 'react';
import Navbar from './Components/Navbar';
// import Homepage from './Components/Homepage';
import MovieDetail from './Components/MovieDetail';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <MovieDetail />
      {/* <Homepage /> */}
    </div>
  );
};

export default App;
