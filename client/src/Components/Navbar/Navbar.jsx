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

const Navbar = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              Share
              <IconButton>
                <AddCirlceOutlineIcon />
              </IconButton>
            </Typography>

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
            <Button>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
