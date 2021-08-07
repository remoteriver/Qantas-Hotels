import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { RatingBar } from 'app/components/RatingBar';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { CancellationType, Hotel } from 'types/Hotel';

export interface Props {
  hotel: Hotel;
}

const useStyles = makeStyles({
  root: {
    maxHeight: 150,
  },
  imgContainer: {
    position: 'relative',
    '& > img': {
      height: 150,
      width: 174,
    },
  },
  banner: {
    position: 'absolute',
    top: 15,
    backgroundColor: 'white',
    padding: 5,
    color: 'red',
    fontWeight: 'bolder',
  },
  content: {
    paddingTop: 15,
    borderTop: 'solid 1px #d7d7d7',
    marginLeft: 20,
  },
});

export const HotelCard = (prop: Props) => {
  const { hotel } = prop;
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <div className={classes.imgContainer}>
          <div className={classes.banner}>{hotel.offer.promotion.title}</div>
          <img src={hotel.property.previewImage.url} alt="hotel preview logo" />
        </div>
      </Grid>
      <Grid item container xs className={classes.content}>
        <Grid item xs={10} container direction="column">
          <Grid item>
            <Typography variant="h5">{hotel.property.title}</Typography>
            <RatingBar rating={hotel.property.rating}></RatingBar>
          </Grid>
          <Grid item>
            <Typography variant="caption">{hotel.property.address}</Typography>
          </Grid>
          <Grid item xs>
            <Box marginY={1}>
              <Link>
                <Typography variant="caption">{hotel.offer.name}</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item>
            {hotel.offer.cancellationOption.cancellationType ===
            CancellationType.FREE_CANCELLATION ? (
              <Button size="small">
                <Typography variant="caption">Free cancellation</Typography>
              </Button>
            ) : undefined}
          </Grid>
        </Grid>
        <Grid item xs={2} container direction="column">
          <Grid item xs></Grid>
          <Grid item>
            <Box textAlign="right">
              <Typography variant="body2" component="span">
                1
              </Typography>
              <Typography variant="caption" component="span">
                {` night total (${hotel.offer.displayPrice.currency})`}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Grid
                container
                alignItems="flex-start"
                justifyContent="flex-end"
                spacing={1}
              >
                <Grid item>
                  <Typography variant="body2" component="span">
                    $
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="span">
                    {hotel.offer.displayPrice.amount}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box textAlign="right">
              <Typography variant="body1" component="span">
                {hotel.offer.savings
                  ? `Save $${hotel.offer.savings.amount}~`
                  : undefined}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
