import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'



const state={
    users:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:''
}


export const getAllUsers=createAsyncThunk('/users',async(_,thunkAPI)=>{
    try {
        
        return userService.getAllUsersService()
        
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.toString() || error.message
        return thunkAPI.rejectWithValue(message)
        
    }

})

export const usersSlice=createSlice({
    name:'users',
    initialState:state,
    reducers:{
        reset:(state)=>{
            state.users=[]
            state.isSuccess=false
            state.isError=false
            state.isLoading=false
            state.message=''
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUsers.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(getAllUsers.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.users=(action.payload)

        })
        builder.addCase(getAllUsers.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload


        })

    }
})


export default usersSlice.reducer
export const {reset}=usersSlice.actions