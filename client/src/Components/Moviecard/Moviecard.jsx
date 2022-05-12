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
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

import { getOneMovie, likeMovie } from '../../Actions/movieActions';

const Moviecard = ({ movie }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEditClick = (id) => {
    dispatch(getOneMovie(id));
  };

  const handleMovieLike = (id) => {
    console.log(`You liked the movie ${id}`);
    dispatch(likeMovie(id, { id: 'Olorunsogo' }));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton onClick={() => handleEditClick(movie?._id)}>
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
        <div>
          <IconButton onClick={() => handleMovieLike(movie?._id)}>
            <FavoriteIcon style={movie?.likes.length ? { color: 'red' } : {}} />
          </IconButton>
          <Typography>{`${movie?.likes.length} like${
            movie?.likes.length > 1 ? 's' : ''
          }`}</Typography>
        </div>

        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Moviecard;
