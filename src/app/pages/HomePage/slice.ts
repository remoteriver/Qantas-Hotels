import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, Data } from './types';

export const initialState: ContainerState = {
  results: [],
};

const homepageSlice = createSlice({
  name: 'homepageState',
  initialState,
  reducers: {
    getData(state) {},
    getDataSuccess(state, action: PayloadAction<Data>) {
      state.results = action.payload.results;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homepageSlice;
