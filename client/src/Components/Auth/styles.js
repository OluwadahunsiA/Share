import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  formStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  formBox: {
    position: 'relative',
    width: '350px',
  },
  closeIcon: {
    boder: '2px solid red',
    position: 'absolute',
  },
  formPaper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  formText: {
    display: 'block',
    padding: '30px',
    textAlign: 'center',
  },
  formField: {
    width: '100%',
  },

  inputField: {
    marginTop: '40px',
  },
  link: {
    cursor: 'pointer',
  },
});
