import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import image from '../../images/default.jpeg';
import { useSelector } from 'react-redux';

const MovieDetail = () => {
  const { selectedMovie } = useSelector((state) => state.movieReducer);
  console.log(selectedMovie[0]);

  return (
    <Container>
      <Grid container spacing={5} sx={{ marginTop: '50px' }}>
        <Grid item xs={5} sx={{ position: 'relative' }}>
          <Box
            component='img'
            sx={{
              position: 'absolute',
              height: '500px',
              width: '500px',
              top: 0,
              left: 0,
            }}
            alt='movie image'
            src={image}
          ></Box>
        </Grid>

        <Grid item xs={7} sx={{ border: '2px solid brown' }}>
          <Typography gutterBottom variant='h5'>
            Title: {selectedMovie[0]?.title}
          </Typography>
          <Typography
            gutterBottom
            variant='p'
            sx={{ marginTop: '30px', display: 'block' }}
          >
            Description: {selectedMovie[0]?.description}
          </Typography>
          <Typography
            gutterBottom
            variant='p'
            sx={{ margin: '10px 0px', display: 'block' }}
          >
            Likes: {selectedMovie[0]?.likes.length}
          </Typography>

          <Typography>tags</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetail;
