import { Container, makeStyles, Toolbar } from '@material-ui/core';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Rating } from 'types/Hotel';

export interface Props {
  rating: Rating;
}

const useStyles = makeStyles({
  root: {},
});

export const RatingBar = (prop: Props) => {
  return <></>;
};
