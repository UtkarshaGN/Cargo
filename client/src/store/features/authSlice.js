import { createSlice,createAsyncThunk, isAction } from "@reduxjs/toolkit";
import API from "../../api/API"

//register
export const register = createAsyncThunk(
    'auth/userRegister', async({name,email,phone,password}, thunkApi)=>{
        try {
            const res = await API.post('/user/register',{name,email,phone,password
            })
             return res.data
        } catch (error) {
            const message = error.message?.data?.message || error.message|| "error in get car from redux"
            return thunkApi.rejectWithValue(message)
        }
    }
)

//login

export const login = createAsyncThunk('auth/userLogin', async({email,password}, thunkApi)=>{
    try {

        const res = await API.post('/user/login', {email,password})

        localStorage.setItem('appData', JSON.stringify(res.data))
        return res.data
        
    } catch (error) {
        const message = error.message?.data?.message || error.message|| "error in get car from redux"
        return thunkApi.rejectWithValue(message)
    }
})

//token
export const loadToken = createAsyncThunk(
    'auth/loadToken',
    ()=>{
        const localData = localStorage.getItem("appData");
        const appData = JSON.parse(localData)
        return appData?.token
    }
)

//getuserdata
export const getUserData = createAsyncThunk(
    'auth/getUser',
    ()=>{
        const localData = localStorage.getItem("appData");
        const appData = JSON.parse(localData)
        return appData?.user
    }
)


const authSlice = createSlice({
    name:"user",
    initialState:{
        loading:false,
        success:false,
        user:null,
        token:null,
        error:null
    },
    reducers:{
        reset:(state)=>{
            state.error = null;
            state.success = false;
        },
        logout: (state)=>{
            state.token = null;
            state.user = null;
        },
    },

    extraReducers: (builder)=>{
 builder
//register
.addCase(register.pending, (state)=>{
 state.loading =true;
})
.addCase(register.fulfilled, (state)=>{
    state.loading = false,
    state.success = true
})

.addCase(register.rejected, (state, action)=>{
    state.error = action.payload
    state.loading = false
})


//login
.addCase(login.pending, (state)=>{
 state.loading =true;
})
.addCase(login.fulfilled, (state)=>{
    state.loading = false,
    state.success = true
})

.addCase(login.rejected, (state, action)=>{
    state.error = action.payload
    state.loading = false
    state.user= action.payload.user
    state.token = action.payload.token
})


}
});


export const {reset, logout} = authSlice.actions
export default authSlice.reducer