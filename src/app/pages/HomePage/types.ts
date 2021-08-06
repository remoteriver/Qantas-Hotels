import { Color } from '@material-ui/core';
import { Hotel } from 'types/Hotel';

/* --- STATE --- */
export interface HomePageState {
  results: Hotel[];
}

export type ContainerState = HomePageState;

export interface Data {
  results: Hotel[];
}
