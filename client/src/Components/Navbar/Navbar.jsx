import React from 'react';
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
import { openModal, switchLoginModal } from '../../Actions/movieActions';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleIconClick = () => {
    dispatch(openModal());
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
                <IconButton onClick={handleIconClick}>
                  <AddCirlceOutlineIcon />
                </IconButton>
              </Typography>
            </Link>

            <Box className={classes.boxStyle}>
              <Grid item xs={3} className={classes.gridStyle}>
                <Paper className={classes.paperStyle}>
                  <InputBase sx={{ ml: 1, flex: 1 }} placeholder='search' />
                  <IconButton sx={{ p: '10px' }}>
                    <SearchIcon className={classes.searchStyle} />
                  </IconButton>
                </Paper>
              </Grid>
            </Box>

            <Typography className={classes.userName}>Name</Typography>
            <Avatar className={classes.image} alt='user image' />
            <Button onClick={() => dispatch(switchLoginModal())}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
