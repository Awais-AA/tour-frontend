import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from '../../../axios/axios';


const initialState={
    agentPoll:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    errorMessage:'',
    successMessage:''
}

export const createAgentPoll=createAsyncThunk('/agent-poll',async(PollData,thunkAPI)=>{
    

       const URL = "/travell-agent-poll/";
       try {
           const res=await axios.post(URL,PollData);
           return res.data.success
           
       } catch (error) {
           const message=( error.response?.data?.message) || error.message|| error.toString()
           return thunkAPI.rejectWithValue(message)
           
       }
        
    
})


export const getAgentPoll=createAsyncThunk('/agent-poll-list',async(_,thunkAPI)=>{
    const URL = "/travell-agent-poll/";
        try {
        const res=await axios.get(URL);
        return res.data
        
    } catch (error) {
        const message=( error.response?.data?.message) || error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }

       

})







export const agentPollingSlice =createSlice({
    name:'agentPolling',
    initialState,
    reducers:{
        reset:(state)=>{
            state.agentPoll=null
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.errorMessage=''
            state.successMessage=''

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createAgentPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(createAgentPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=action.payload
            
        })
        .addCase(createAgentPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
        })

        .addCase(getAgentPoll.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(getAgentPoll.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=''
            state.agentPoll=action.payload
        })
        .addCase(getAgentPoll.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
            state.agentPoll=null
        })
    }

    
})

export default agentPollingSlice.reducer
export const {reset}=agentPollingSlice.actions