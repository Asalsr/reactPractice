import {  configureStore } from '@reduxjs/toolkit'
// import {startLoading, saveData, catchError, stopLoading, cleanError} from './reducers';
import apiReducer from './reducers/api-reducers'

const Store = configureStore({
    reducer: {
        photos:apiReducer,
    }
})

export default Store;







/* FIRST TRY 
const setSlice = createSlice({
    name: 'example',
    initialState: {
        value: 0,
    }, 
    reducers: {
        increment: (state) => {
            state += 1;
        },
        decrement: (state) => {
            state -= 1;
        },
        incrementBy: (state, action) => {
            state.value += action.payload
        },
    }, 
});

const store = configureStore({
    reducer: {
        example: setSlice.reducer,  
    },
});

export const {increment, decrement, incrementBy} = setSlice.actions;

export default store;
*/
