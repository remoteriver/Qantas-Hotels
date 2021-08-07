import { Container, Grid, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hotel } from 'types/Hotel';
import { HotelCard } from '../HotelCard';

export interface Props {
  hotels: Hotel[];
}

export const HotelList = (prop: Props) => {
  const { hotels } = prop;

  return (
    <>
      <Grid container direction="column" spacing={1}>
        {hotels?.map((hotel, index) => (
          <Grid item key={index}>
            <HotelCard hotel={hotel}></HotelCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
