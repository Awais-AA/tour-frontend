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
    console.log(userData);

    const[res,err] = await axios.post(URL,userData);
  

    console.log(res);

       if(res) return res.data

        if(err){ 
        
        return thunkAPI.rejectWithValue(err)
       } 

        
    
})


export const login=createAsyncThunk('auth/login',async(userData,thunkAPI)=>{
    const URL = "/register/";
    console.log(userData);
    const[res,err] = await axios.post(URL,userData);
  


       if(res) return res.data

        if(err){ 
        console.log(err);
        
        return thunkAPI.rejectWithValue(err)
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
        reset:(state)=>{
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
            state.message=action.payload
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
            state.message=action.payload
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
export const {reset}=authSlice.actions