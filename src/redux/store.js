import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import roomReducer from './slice/roomSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    room: roomReducer,
});
const store = configureStore({
    reducer: rootReducer, 
})

export default store;