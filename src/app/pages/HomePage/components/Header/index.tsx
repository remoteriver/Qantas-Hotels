import { Container, makeStyles, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

const useStyles = makeStyles({
  logo: {
    height: 50,
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar disableGutters>
        <img src={'img/qantas-logo.png'} alt="logo" className={classes.logo} />
      </Toolbar>
    </>
  );
};
