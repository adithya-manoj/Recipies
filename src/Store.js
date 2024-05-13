import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  favorites: favoritesReducer,
});

export default store;