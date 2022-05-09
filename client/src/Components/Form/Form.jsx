import React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useStyles } from './styles';
const Form = () => {
  const classes = useStyles();
  return (
    <form>
      <Box className={classes.formBox}>
        <Paper elevation={5} className={classes.formPaper}>
          <Typography className={classes.formText}>
            Create A New Movie
          </Typography>
          <TextField
            
            className={classes.formField}
            label="Title"
            margin="normal"
            focused={false}
          ></TextField>
          <TextField
            
            className={classes.formField}
            label="Description"
            margin="normal"
            focused={false}
          ></TextField>
       
        </Paper>
      </Box>
    </form>
  );
};

export default Form;
