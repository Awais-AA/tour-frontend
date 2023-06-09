import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from '../../../axios/axios';


const initialState={
    userPoll:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    errorMessage:'',
    successMessage:''
}

export const createUserPoll=createAsyncThunk('/user-poll',async(userPollData,thunkAPI)=>{
    

       const URL = "/poll/";
       try {
           const res=await axios.post(URL,userPollData);
           return res.data.success
           
       } catch (error) {
           const message=( error.response?.data?.message) || error.message|| error.toString()
           return thunkAPI.rejectWithValue(message)
           
       }
        
    
})


export const getUserPoll=createAsyncThunk('/user-poll-list',async(_,thunkAPI)=>{
    const URL = "/all-poll";
        try {
        const res=await axios.get(URL);
        return res.data
        
    } catch (error) {
        const message=( error.response?.data?.message) || error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }

       

})







export const userPollingSlice =createSlice({
    name:'userPolling',
    initialState,
    reducers:{
        reset:(state)=>{
            state.userPoll=null
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.errorMessage=''
            state.successMessage=''

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createUserPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(createUserPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=action.payload
            
        })
        .addCase(createUserPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
        })

        .addCase(getUserPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(getUserPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=''
            state.userPoll=action.payload
        })
        .addCase(getUserPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
            state.userPoll=null
        })
    }

    
})

export default userPollingSlice.reducer
export const {reset}=userPollingSlice.actions