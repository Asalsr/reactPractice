import { createSlice } from "@reduxjs/toolkit";
import instance from "../../api";


const initialState = {
    loading:true, 
    error: {
        status:false, 
        message:""
    }, 
    photo: [], 

}


const apiSlice = createSlice({
    name: 'api',
    initialState, 
    reducers: {
        startLoading:(state) => {
         state.loading = true  
        },
        stopLoading: (state) => {
         state.loading = false
        },
        saveData: (state, action) => {  
         state.photo = action.payload;    
        },
        catchError: (state, action) => {
            state.error.status = true;
            state.error.message = action.payload;
            state.photo = [] //meaning remains empty
        },
        cleanError: (state) => {
            state.error.status = false;
            state.error.message = '';

        },

    },
})


export const fetchdata = (path) => async (dispatch) => {
        dispatch(startLoading());
        dispatch(cleanError());
        try {
            const response = await instance.get(path);
            dispatch(saveData(response.data));
        } catch (error) {   
            dispatch(catchError(error.errors));
            }
        dispatch(stopLoading());
}


// sakhtan reducer 
export const {startLoading, saveData, catchError, stopLoading, cleanError} = apiSlice.actions;
const {reducer} = apiSlice;

export default reducer;