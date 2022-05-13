import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import image from '../../images/default.jpeg';

const MovieDetail = () => {
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
            This is the title of the movie
          </Typography>
          <Typography
            gutterBottom
            variant='p'
            sx={{ marginTop: '30px', display: 'block' }}
          >
            Description: This is where the description of the movie goes
          </Typography>
          <Typography
            gutterBottom
            variant='p'
            sx={{ margin: '10px 0px', display: 'block' }}
          >
            Likes: 20
          </Typography>

          <Typography>tags</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetail;
