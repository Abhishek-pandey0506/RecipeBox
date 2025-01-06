import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './Slice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});