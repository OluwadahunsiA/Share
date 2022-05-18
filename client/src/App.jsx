import React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import MovieDetail from './Components/MovieDetail';
import Auth from './Components/Auth/Auth';
import { CssBaseline } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const { token} = useSelector((state) => state.userReducer);
  const localUser = JSON.parse(localStorage.getItem('user'));

  const routes = (token) => {
    if (!token) {
      return (
        <Routes>
          <Route path={'/auth'} element={<Auth />} />
          <Route path={'*'} element={<Auth />} />
        </Routes>
      );
    } else if (token) {
      return (
        <Routes>
          <Route path={'/'} element={<Homepage />} exact />
          <Route
            path={'/movie/:id'}
            element={<MovieDetail user={localUser} />}
          />
          <Route path={'*'} element={<p>Sorry this page does not exist</p>} />
        </Routes>
      );
    }
  };
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar login={token || localUser.token} user={localUser} />
      {routes(token || localUser.token)}
    </BrowserRouter>
  );
};

export default App;
