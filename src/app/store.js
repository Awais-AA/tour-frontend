import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../redux/features/auth/authSlice'
import usersReducer from '../redux/features/users/usersSlice'
import userPollingReducer from '../redux/features/user-polling/userPollingSlice'
import agentPollingReducer from '../redux/features/agent-polling/agentPollingSlice'
import groupPollingReducer from '../redux/features/group-polling/groupPollingSlice'
import bookedPollingReducer from '../redux/features/booked-polling/bookedPollingSlice'


export const store=configureStore({
    reducer:{
        auth:authReducer,
        users:usersReducer,
        userPoll:userPollingReducer,
        agentPoll:agentPollingReducer,
        groupPoll:groupPollingReducer,
        bookedPoll:bookedPollingReducer,
        
    }
})

export default store