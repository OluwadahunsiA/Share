import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useStyles } from './styles';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import {
  IconButton,
  Button,
  Typography,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { switchLoginModal } from '../../Actions/movieActions';

// eslint-disable-next-line react/prop-types
const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loginModal } = useSelector((state) => state.movieReducer);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleFormClose = () => {
    console.log('clicked');
    dispatch(switchLoginModal());
  };

  const handleFormSubmit = () => {};

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Modal open={loginModal}>
      <form className={classes.formStyle}>
        <Box className={classes.formBox}>
          <Paper elevation={5} className={classes.formPaper}>
            <Typography className={classes.formText}>
              {isSignUp ? 'Sign Up' : 'Login'}
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

            {isSignUp && (
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
            )}
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
            <FormControl sx={{ m: 1, width: '100%', right: '7px' }}>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <OutlinedInput
                id='password'
                name='password'
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='password'
              ></OutlinedInput>
            </FormControl>

            {isSignUp && (
              <FormControl sx={{ m: 1, width: '100%', right: '7px' }}>
                <InputLabel htmlFor='password'>Confirm Password</InputLabel>
                <OutlinedInput
                  id='confirmPassword'
                  name='confirmPassword'
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Confirm password'
                ></OutlinedInput>
              </FormControl>
            )}

            <Button
              sx={{ marginTop: '10px' }}
              variant='contained'
              color='inherit'
              onClick={handleFormSubmit}
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </Button>
            <Typography sx={{ marginTop: '25px' }}>
              {isSignUp ? 'If you already have an account' : 'If you are new '}
              <Link
                className={classes.link}
                onClick={() => setIsSignUp((prev) => !prev)}
              >
                {' '}
                {isSignUp ? 'Login' : 'Sign Up'}
              </Link>{' '}
            </Typography>
          </Paper>
        </Box>
      </form>
    </Modal>
  );
};

export default Auth;
