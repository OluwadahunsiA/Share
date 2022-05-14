import React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import MovieDetail from './Components/MovieDetail';
import { CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Homepage />} exact />
        <Route path={'/movie/:id'} element={<MovieDetail />} />
        <Route path={'*'} element={<p>Sorry this page does not exist</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
