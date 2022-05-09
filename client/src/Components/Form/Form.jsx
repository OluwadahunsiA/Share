import React from 'react';
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

// eslint-disable-next-line react/prop-types
const Form = ({ open }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleFormClose = () => {
    dispatch(closeModal());
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
              margin='normal'
              focused={false}
            ></TextField>
            <TextField
              className={classes.formField}
              label='Description'
              margin='normal'
              focused={false}
            ></TextField>
            <TextField
              className={classes.formField}
              label='Tags'
              margin='normal'
              focused={false}
            ></TextField>
            <input className={classes.inputField} type='file'></input>

            <Button variant='contained' color='inherit'>
              Add
            </Button>
          </Paper>
        </Box>
      </form>
    </Modal>
  );
};

export default Form;
