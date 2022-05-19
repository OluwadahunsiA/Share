import React, { useEffect } from 'react';

import { useStyles } from './styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Form from '../Form';
import { useSelector } from 'react-redux';
import Moviecard from '../Moviecard';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../../Actions/movieActions';

const Homepage = () => {
  const classes = useStyles();

  const {
    movieReducer: { openModal, movies, searchValue },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getAllMovies());
    }
  }, []);

  return (
    <Box className={classes.gridContainer}>
      <Form open={openModal} />
      <Grid container spacing={2}>
        {movies
          .filter(
            (movie) =>
              movie?.title.includes(searchValue) ||
              movie?.description.includes(searchValue)
          )
          .map((movie) => (
            <Grid key={movie._id} item xs={3}>
              <Moviecard key={movie._id} movie={movie} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Homepage;
