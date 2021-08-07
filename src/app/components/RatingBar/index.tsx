import { Container, makeStyles, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { default as MuiRating } from '@material-ui/lab/Rating';
import { Rating, RatingType } from 'types/Hotel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

export interface Props {
  rating: Rating;
}

const useStyles = makeStyles({
  root: {},
});

export const RatingBar = (prop: Props) => {
  const { rating } = prop;

  const getIcon = () => {
    switch (rating.ratingType) {
      case RatingType.SELF:
        return <FavoriteIcon fontSize="inherit" />;
      case RatingType.STAR:
        return <StarIcon fontSize="inherit" />;
      default:
        return <StarIcon fontSize="inherit" />;
    }
  };

  return (
    <>
      <MuiRating
        value={rating.ratingValue}
        precision={0.5}
        icon={getIcon()}
        readOnly
      />
    </>
  );
};
