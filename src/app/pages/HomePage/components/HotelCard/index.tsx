import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { RatingBar } from 'app/components/RatingBar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hotel } from 'types/Hotel';

export interface Props {
  hotel: Hotel;
}

const useStyles = makeStyles({
  root: { position: 'relative' },
  card: {
    position: 'relative',
  },
});

export const HotelCard = (prop: Props) => {
  const { hotel } = prop;

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <img src={hotel.property.previewImage.url} alt="hotel preview logo" />
        </Grid>
        <Grid item container xs={10}>
          <Grid item xs={10} container direction="column">
            <Grid item>
              <Typography variant="h5">{hotel.property.title}</Typography>
              <RatingBar rating={hotel.property.rating}></RatingBar>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {hotel.property.address}
              </Typography>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <Typography variant="caption">Free cancellation</Typography>
            </Grid>
          </Grid>
          <Grid item xs={2} container direction="column">
            <Grid item xs></Grid>
            <Grid item>
              <Typography variant="h5">
                {hotel.offer.displayPrice.amount}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
