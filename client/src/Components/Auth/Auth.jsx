import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useStyles } from './styles';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../Actions/movieActions';

// import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleFormClose = () => {
    dispatch(closeModal());
    setUser({ username: '', email: '', password: '', confirmPassword: '' });
  };

  const handleFormSubmit = () => {};

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Modal open={true}>
      <form className={classes.formStyle}>
        <Box className={classes.formBox}>
          <Paper elevation={5} className={classes.formPaper}>
            <Typography className={classes.formText}>
              Login or Sign Up
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
              label='Username'
              name='username'
              value={user.username}
              margin='normal'
              required
              focused
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.formField}
              label='Email'
              name='email'
              value={user.email}
              margin='normal'
              focused={false}
              required
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.formField}
              value={user.password}
              label='Password'
              name='password'
              margin='normal'
              focused={false}
              required
              onChange={handleChange}
            ></TextField>
            <TextField
              className={classes.formField}
              value={user.password}
              label='Confirm Password'
              name='confirmPassword'
              margin='normal'
              focused={false}
              required
              onChange={handleChange}
            ></TextField>

            <Button
              sx={{ marginTop: '10px' }}
              variant='contained'
              color='inherit'
              onClick={handleFormSubmit}
            >
              Login or Sign Up
            </Button>
          </Paper>
        </Box>
      </form>
    </Modal>
  );
};

export default Auth;
