import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from '../../../axios/axios';


const initialState={
    bookedPoll:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    errorMessage:'',
    successMessage:''
}

export const createBookedPoll=createAsyncThunk('/booked-poll',async(userPollData,thunkAPI)=>{
    

       const URL = "/booking-poll/";
       try {
           const res=await axios.post(URL,userPollData);
           return res.data.success
           
       } catch (error) {
           const message=( error.response?.data?.message) || error.message|| error.toString()
           return thunkAPI.rejectWithValue(message)
           
       }
        
    
})


export const getBookedPoll=createAsyncThunk('/booked-poll-list',async(_,thunkAPI)=>{
    const URL = "/booking-poll/";
        try {
        const res=await axios.get(URL);
        return res.data
        
    } catch (error) {
        const message=( error.response?.data?.message) || error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }

       

})







export const bookedPollingSlice =createSlice({
    name:'bookedPolling',
    initialState,
    reducers:{
        reset:(state)=>{
            state.bookedPoll=null
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.errorMessage=''
            state.successMessage=''

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createBookedPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(createBookedPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=action.payload
            
        })
        .addCase(createBookedPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
        })

        .addCase(getBookedPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(getBookedPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=''
            state.bookedPoll=action.payload
        })
        .addCase(getBookedPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
            state.bookedPoll=null
        })
    }

    
})

export default bookedPollingSlice.reducer
export const {reset}=bookedPollingSlice.actions