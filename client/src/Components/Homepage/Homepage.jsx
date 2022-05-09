import React from 'react';

import { useStyles } from './styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Form from '../Form';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const classes = useStyles();
  const { movieReducer } = useSelector((state) => state);
  

  return (
    <Box className={classes.gridContainer}>
      <Form open={movieReducer.openModal} />
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
