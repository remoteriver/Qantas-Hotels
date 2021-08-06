import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

const select = (state: RootState) => state.homepageState;

export const selectResults = createSelector([select], state => state?.results);
