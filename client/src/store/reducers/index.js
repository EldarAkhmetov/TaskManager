import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: { authReducer, tasksReducer },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});
