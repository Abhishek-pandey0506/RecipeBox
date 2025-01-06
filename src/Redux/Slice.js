import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: {},
    like: []
  };

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const { id } = action.payload;
      state.favorites[id] = !state.favorites[id];
    },
    addLike:(state, action)=>{
        state.like=  [...state.like, action.payload];
      
}
  },
});

export const { toggleFavorite, addLike } = favoriteSlice.actions;

export const selectFavorite = (state, id) => state.favorites.favorites[id];

export default favoriteSlice.reducer;