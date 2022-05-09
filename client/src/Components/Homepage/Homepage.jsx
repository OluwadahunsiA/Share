import React from 'react';

import { useStyles } from './styles';
import Moviecard from '../Moviecard';
import Form from '../Form';

const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.boxStyle}></div>
      <Moviecard />

      <Form />
    </>
  );
};

export default Homepage;
