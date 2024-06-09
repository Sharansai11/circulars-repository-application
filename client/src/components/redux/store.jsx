//create redux store
import { configureStore } from '@reduxjs/toolkit';
import StaffAdminReducer from './slices/StaffAdminSlice';

export const store = configureStore({
    reducer: {
        StaffAdminLoginReducer: StaffAdminReducer
    }
})