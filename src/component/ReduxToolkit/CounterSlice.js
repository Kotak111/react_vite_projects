import { createSlice } from "@reduxjs/toolkit";
const too = {
    no1:0,
    no2:0
}
const counterSlice=createSlice({
        name:"counter",
        initialState:too,
        reducers:{
            inc(state){
                state.no1++;
            },
            dec(state){
                state.no1 > 0 ? state.no1-- : state
                        // state.no1--;
            },
            incBy10(state,action){
                state.no2 +=action.payload;
                console.log(action.payload);
            }
        }
})
export const {inc ,dec, incBy10}=counterSlice.actions;
export default counterSlice.reducer;