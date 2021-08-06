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
        <Grid item>
          <img src={hotel.property.previewImage.url} alt="hotel preview logo" />
        </Grid>
      </Grid>
    </>
  );
};
