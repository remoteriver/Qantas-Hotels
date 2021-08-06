import { Container, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export const Header = () => {
  return (
    <>
      <Toolbar>
        <img src={'img/qantas-logo.png'} alt="logo" />
      </Toolbar>
    </>
  );
};
