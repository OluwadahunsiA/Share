import React from 'react';

import { useStyles } from './styles';

const Homepage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.boxStyle}></div>
    </>
  );
};

export default Homepage;
