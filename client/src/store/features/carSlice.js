import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name:"car",
    initialState:{
        loading:false,
        success:false,
        cars:[],
        error:null
    },
    reducers:{},
    //extraReducers: (builder)=>{
    //    builder.addCase()
    //}
});

export default carSlice.reducer