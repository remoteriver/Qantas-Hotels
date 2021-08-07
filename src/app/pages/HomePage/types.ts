import { Color } from '@material-ui/core';
import { Hotel } from 'types/Hotel';

/* --- STATE --- */
export interface HomePageState {
  results: Hotel[];
}

export type ContainerState = HomePageState;

export type Data = {
  results: Hotel[];
};

export enum SortBy {
  PRICE_LOW_HIGH,
  PRICE_HIGH_LOW,
}
