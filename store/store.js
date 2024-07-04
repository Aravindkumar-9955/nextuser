// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootreducers.js'; // Assuming you have combineReducers in './rootreducers'

const store = configureStore({
  reducer: rootReducer,
  // Optionally add middleware, enhancers, etc. as needed
});

export default store ;

