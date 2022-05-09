import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

export const useStyles = makeStyles({
  image: {
    margin: '0px 20px',
  },
  boxStyle: {
    marginRight: '30px',
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fffff',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});
