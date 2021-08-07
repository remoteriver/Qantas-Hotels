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
import { Helmet } from 'react-helmet-async';
import { Hotel } from 'types/Hotel';
import { HotelCard } from '../HotelCard';

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

export const HotelList = (prop: Props) => {
  const { hotels } = prop;
  const classes = useStyles();

  return (
    <>
      <Box marginY={3}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Box>
              <Typography component="span" variant="h5">
                {hotels.length}{' '}
              </Typography>
              <Typography component="i">hotels in </Typography>
              <Typography component="span">Sydney.</Typography>
            </Box>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="sort-select-label">Sort by</InputLabel>
              <Select labelId="sort-select-label" id="sort-select">
                <MenuItem value={1}>Price (high-low)</MenuItem>
                <MenuItem value={2}>Price (low-high)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Grid container direction="column" spacing={1} className={classes.root}>
        {hotels?.map((hotel, index) => (
          <Grid item key={index}>
            <HotelCard hotel={hotel}></HotelCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
