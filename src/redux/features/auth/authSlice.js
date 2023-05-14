import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

import axios from '../../../axios/axios';

const initialState={
    user:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    errorMessage:'',
    successMessage:''
}

export const register=createAsyncThunk('/register',async(userData,thunkAPI)=>{
    
    const URL = "/register/";
 try {
        const res=await axios.post(URL,userData);
        return res.data.success
        
    } catch (error) {
        const message=( error.response?.data?.message) || error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }

        
    
})


export const login=createAsyncThunk('/login',async(userData,thunkAPI)=>{
    const URL = "/login/";
    try {
        const res=await axios.post(URL,userData);
        return res.data
        
    } catch (error) {
        const message=( error.response?.data?.message) || error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }

})

export const logout=createAsyncThunk('auth/logout',async(_,thunkAPI)=>{
    try {
        return await authService.logoutService()
        
    } catch (error) {
        const message=( error.response?.data?.message) || error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }

})

export const refresh=createAsyncThunk('/refresh',async(_,thunkAPI)=>{
    try {
      
        return await authService.refreshTokenService()
  
        
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.toString() || error.message
        return thunkAPI.rejectWithValue(message)
        
    }
  })



export const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        resetStatus:(state)=>{
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.errorMessage=''
            state.successMessage=''
        },
        resetState:(state)=>{
            state.user=null
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.errorMessage=''
            state.successMessage=''

        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.successMessage=action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.successMessage=''
            state.errorMessage=action.payload
            state.user=null
        })

        .addCase(login.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.errorMessage=action.payload
            state.user=null
        })


        .addCase(logout.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(logout.fulfilled,(state)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=null
        })
        .addCase(logout.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })



        .addCase(refresh.pending,(state)=>{
            state.isLoading=true

        })
        .addCase(refresh.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            let{token,...others}=state.user
            token=action.payload.token
            state.user={token,...others}
        })
        .addCase(refresh.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })

    }

    
})

export default authSlice.reducer
export const {resetState,resetStatus}=authSlice.actions