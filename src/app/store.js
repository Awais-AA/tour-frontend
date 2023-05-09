import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../redux/features/auth/authSlice'
import usersReducer from '../redux/features/users/usersSlice'
import userPollingReducer from '../redux/features/user-polling/userPollingSlice'



export const store=configureStore({
    reducer:{
        auth:authReducer,
        users:usersReducer,
        userPoll:userPollingReducer
        
    }
})

export default store