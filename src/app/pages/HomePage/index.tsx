import { Box, Container } from '@material-ui/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useEffectOnMount } from 'utils/useEffectOnMount';
import { Header } from './components/Header';
import { HotelList } from './components/HotelList';
import { saga } from './saga';
import { selectResults } from './selectors';
import { sliceKey, reducer, actions } from './slice';

export const HomePage = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: saga });

  const dispatch = useDispatch();
  const results = useSelector(selectResults);

  useEffectOnMount(() => {
    dispatch(actions.getData());
  });

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container maxWidth="md">
        <Box p={2}>
          <Header></Header>
          <HotelList hotels={results}></HotelList>
        </Box>
      </Container>
    </>
  );
};
