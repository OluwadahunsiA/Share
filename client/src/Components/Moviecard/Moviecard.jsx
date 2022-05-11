/* eslint react/prop-types: 0 */
import React from 'react';

import {
  Card,
  Typography,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  IconButton,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import defaultImage from '../../images/default.jpeg';

import { useStyles } from './styles';

const Moviecard = ({ movie }) => {
  const classes = useStyles();

  const handleMoreClick = (id) => {
    console.log('clicked more');
    console.log(id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton onClick={() => handleMoreClick(movie?._id)}>
            <MoreHorizIcon />
          </IconButton>
        }
      />
      <CardMedia
        component='img'
        height='194'
        alt='movie image'
        image={movie?.file || defaultImage}
      />
      <CardContent>
        <Typography variant='h5'>{movie?.title}</Typography>
        <Typography variant='p'>{movie?.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Moviecard;
