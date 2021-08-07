import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hotel } from 'types/Hotel';
import { SortBy } from '../../types';
import { HotelCard } from './components/HotelCard';
import { Sortbar } from './components/Sortbar';

export interface Props {
  hotels: Hotel[];
}

const useStyles = makeStyles({
  root: {
    borderBottom: 'solid 1px #d7d7d7',
  },
  italic: {
    textDecoration: 'italic',
  },
  formControl: {
    minWidth: 150,
  },
});

const numberCompartor = (a: number, b: number, order: 'asc' | 'desc') => {
  if (b < a) {
    return order === 'asc' ? -1 : 1;
  }
  if (b > a) {
    return order === 'asc' ? 1 : -1;
  }
  return 0;
};

const getComparator = (sortby: SortBy) => {
  return (a: Hotel, b: Hotel) => {
    switch (sortby) {
      case SortBy.PRICE_HIGH_LOW:
        return numberCompartor(
          a.offer.displayPrice.amount,
          b.offer.displayPrice.amount,
          'asc',
        );
      case SortBy.PRICE_LOW_HIGH:
        return numberCompartor(
          a.offer.displayPrice.amount,
          b.offer.displayPrice.amount,
          'desc',
        );
      default:
        return numberCompartor(
          a.offer.displayPrice.amount,
          b.offer.displayPrice.amount,
          'asc',
        );
    }
  };
};

export const HotelList = (prop: Props) => {
  const { hotels } = prop;
  const classes = useStyles();

  const [sortbyState, setSortByState] = useState(SortBy.PRICE_LOW_HIGH);

  const sortedHotels = useMemo(
    () => hotels.map(h => h).sort(getComparator(sortbyState)),
    [hotels, sortbyState],
  );

  const handleSort = (sortby: SortBy) => {
    //debugger;
    setSortByState(sortby);
  };

  return (
    <>
      <Box marginY={3}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Box>
              <Typography component="span" variant="h5">
                {sortedHotels.length}{' '}
              </Typography>
              <Typography component="i">hotels in </Typography>
              <Typography component="span">Sydney.</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Sortbar sortby={sortbyState} handleSort={handleSort}></Sortbar>
          </Grid>
        </Grid>
      </Box>
      <Grid container direction="column" spacing={1} className={classes.root}>
        {sortedHotels?.map((hotel, index) => (
          <Grid item key={index}>
            <HotelCard hotel={hotel}></HotelCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
