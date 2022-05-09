import React from 'react';

import { useStyles } from './styles';
import Moviecard from '../Moviecard';

const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.boxStyle}></div>
      <Moviecard />
    </>
  );
};

export default Homepage;
