// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userpage/reducers'; // Adjust the import path as per your file structure

const rootReducer = combineReducers({
  usercomp: userReducer, // Assuming userReducer is the reducer exported from userSlice
  // Add other reducers here if needed
});

export default rootReducer;

