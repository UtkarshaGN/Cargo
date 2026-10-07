import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/API"
//get all cars
export const getAllCars = createAsyncThunk(
    'car/getAllCars',
    async(_,thunkApi)=>{
        try {
            const res = await API.get("/car/all-cars");
            return res.data
            
        } catch (error) {
            const message = error.message?.data?.message || error.message|| "error in get car from redux"
            return thunkApi.rejectWithValue(message)
        }
    }
);
//get car details page
export const getCarDetails = createAsyncThunk(
    'car/getCarDetails',
    async(id, thunkApi)=>{
        try {
            const res = await API.get(`car/${id}`)
            return res.data
        } catch (error) {
            const message = error.message?.data?.message || error.message|| "error in get car from redux"
            return thunkApi.rejectWithValue(message)
        }
    }
)



const carSlice = createSlice({
    name:"car",
    initialState:{
        loading:false,
        success:false,
        cars:[],
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{

        //get all cars
       builder.
       addCase(getAllCars.pending, (state)=>{
        state.loading =true;
        state.error = null;
        state.success = false;
       })
       .addCase(getAllCars.fulfilled, (state, action)=>{
        state.loading = false;
        state.error = null;
        state.success = true;
        state.cars = action.payload.cars;
       })

       .addCase(getAllCars.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.success = false;
       })

       //car details page

       .addCase(getCarDetails.pending, (state)=>{
        state.loading =true;
        state.error = null;
        state.success = false;
       })
       .addCase(getCarDetails.fulfilled, (state, action)=>{
        state.loading = false;
        state.error = null;
        state.success = true;
        state.cars = action.payload.cars;
       })

       .addCase(getCarDetails.rejected, (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.success = false;
       })

    }
});

export default carSlice.reducer