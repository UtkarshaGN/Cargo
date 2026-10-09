import {configureStore} from '@reduxjs/toolkit'
import carReducer from './features/carSlice'
import authReducer from './features/authSlice'



export const store = configureStore({
    reducer:{
        car:carReducer,
        auth:authReducer
    },
})