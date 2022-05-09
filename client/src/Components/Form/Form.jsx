import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useStyles } from './styles';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../Actions/movieActions';
import FileBase from 'react-file-base64';

// eslint-disable-next-line react/prop-types
const Form = ({ open }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    tags: '',
    file: '',
  });

  const handleFormClose = () => {
    dispatch(closeModal());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(movie.file[0]);
    console.log(movie);
  };

  const handleChange = (e) => {
    if (e.target.name !== 'file') {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    }
  };
  return (
    <Modal open={open}>
      <form className={classes.formStyle}>
        <Box className={classes.formBox}>
          <Paper elevation={5} className={classes.formPaper}>
            <Typography className={classes.formText}>
              Create A New Movie
            </Typography>

            <IconButton
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
              }}
              onClick={handleFormClose}
            >
              <CloseIcon />
            </IconButton>

            <TextField
              className={classes.formField}
              label='Title'
              name='title'
              value={movie.title}
              margin='normal'
              required
              focused
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.formField}
              label='Description'
              name='description'
              value={movie.description}
              margin='normal'
              focused={false}
              required
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.formField}
              value={movie.tags}
              label='Tags'
              name='tags'
              margin='normal'
              focused={false}
              required
              onChange={handleChange}
            ></TextField>

            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => setMovie({ ...movie, file: base64 })}
            />

            <Button
              variant='contained'
              color='inherit'
              onClick={handleFormSubmit}
            >
              Add
            </Button>
          </Paper>
        </Box>
      </form>
    </Modal>
  );
};

export default Form;
