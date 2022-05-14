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
  CardActionArea,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import defaultImage from '../../images/default.jpeg';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';

import {
  getOneMovie,
  likeMovie,
  deleteMovie,
  showMovieDetail,
} from '../../Actions/movieActions';

const Moviecard = ({ movie }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    dispatch(getOneMovie(id));
  };

  const handleMovieLike = (id) => {
    dispatch(likeMovie(id, { id: 'Olorunsogo' }));
  };

  const handleMovieDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleCardClick = (id) => {
  
    dispatch(showMovieDetail(id));
    navigate(`/movie/${id}`);
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
      <CardActionArea onClick={() => handleCardClick(movie?._id)}>
        <CardMedia
          component='img'
          height='194'
          alt='movie image'
          image={movie?.file || defaultImage}
        />
        <CardContent>
          <Typography
            variant='h5'
            noWrap={true}
            style={{ width: 'maxWidth' }}
            gutterBottom
            sx={{
              width: '90%',
              display: 'inline-block',
            }}
          >
            {movie?.title}
          </Typography>
          <Typography
            variant='p'
            noWrap={true}
            sx={{
              width: '90%',
              display: 'inline-block',
            }}
          >
            {movie?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <div>
          <IconButton onClick={() => handleMovieLike(movie?._id)}>
            <FavoriteIcon style={movie?.likes.length ? { color: 'red' } : {}} />
          </IconButton>
          <Typography>{`${movie?.likes.length} like${
            movie?.likes.length > 1 ? 's' : ''
          }`}</Typography>
        </div>

        <IconButton onClick={() => handleMovieDelete(movie?._id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Moviecard;
