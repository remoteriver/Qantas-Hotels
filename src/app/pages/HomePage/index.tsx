import { Container } from '@material-ui/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <Header></Header>
        <span>HomePage container</span>
      </Container>
    </>
  );
};
