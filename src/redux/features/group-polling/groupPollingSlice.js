import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from '../../../axios/axios';


const initialState={
    groupPoll:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    errorMessage:'',
    successMessage:''
}

export const createGroupPoll=createAsyncThunk('/group-poll',async(userPollData,thunkAPI)=>{
    

       const URL = "/group-tour/";
       try {
           const res=await axios.post(URL,userPollData);
           return res.data.success
           
       } catch (error) {
           const message=( error.response?.data?.message) || error.message|| error.toString()
           return thunkAPI.rejectWithValue(message)
           
       }
        
    
})


export const getGroupPoll=createAsyncThunk('/group-poll-list',async(_,thunkAPI)=>{
    const URL = "/group-tour/";
        try {
        const res=await axios.get(URL);
        return res.data
        
    } catch (error) {
        const message=( error.response?.data?.message) || error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }

       

})







export const groupPollingSlice =createSlice({
    name:'groupPolling',
    initialState,
    reducers:{
        reset:(state)=>{
            state.groupPoll=null
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.errorMessage=''
            state.successMessage=''

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createGroupPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(createGroupPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=action.payload
            
        })
        .addCase(createGroupPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
        })

        .addCase(getGroupPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(getGroupPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=''
            state.groupPoll=action.payload
        })
        .addCase(getGroupPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
            state.groupPoll=null
        })
    }

    
})

export default groupPollingSlice.reducer
export const {reset}=groupPollingSlice.actions