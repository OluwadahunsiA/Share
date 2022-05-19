import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Grid,
  InputBase,
  Paper,
  IconButton,
} from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import { useStyles, theme } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import AddCirlceOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import {
  openModal,
  switchLoginModal,
  searchValue,
} from '../../Actions/movieActions';
import { logout } from '../../Actions/userActions';
import { Link } from 'react-router-dom';

const Navbar = ({ login, user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleIconClick = () => {
    dispatch(openModal());
  };

  const handleSearch = (e) => {
    setValue(e.target.value);
    dispatch(searchValue(e.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <Link
              to='/'
              style={{ textDecoration: 'none', color: 'grey', flexGrow: 1 }}
            >
              <Typography variant='h6'>
                Share
                <IconButton onClick={handleIconClick} value={value}>
                  <AddCirlceOutlineIcon />
                </IconButton>
              </Typography>
            </Link>

            <Box className={classes.boxStyle}>
              <Grid item xs={3} className={classes.gridStyle}>
                <Paper className={classes.paperStyle}>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder='search'
                    onChange={handleSearch}
                  />
                  <IconButton sx={{ p: '10px' }}>
                    <SearchIcon className={classes.searchStyle} />
                  </IconButton>
                </Paper>
              </Grid>
            </Box>

            <Typography className={classes.userName}>
              {user?.username || 'Name'}{' '}
            </Typography>
            <Avatar className={classes.image} alt='user image' />
            {!login ? (
              <Button onClick={() => dispatch(switchLoginModal())}>
                {'Login'}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  localStorage.clear('user');
                  dispatch(logout());
                }}
              >
                {'Logout'}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
