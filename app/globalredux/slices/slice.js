"use client";
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state,action) => {
      
      const existingItem = state.value.findIndex(item => item.id === action.payload.id);

      if (existingItem!==-1) {
        
        // If the item already exists, update the count
        state.value= state.value.map(item =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );

        
      } else {
        // If the item doesn't exist, add it to the state
        state.value= [...state.value, { ...action.payload, count: 1 }];
       
      }

    },
    decrement: (state,action) => {
      const itemToRemove = state.value.findIndex(item => item.id === action.payload.id);

      if (itemToRemove!==-1) {
        // If the item exists, check the count
        
        if (state.value[itemToRemove].count > 1) {
          // If count is greater than 1, decrease the count
          state.value= state.value.map(item =>
            item.id === action.payload.id
              ? { ...item, count: item.count - 1 }
              : item
          );
        } else {
          // If count is 1, remove the item from the state
          state.value.splice(itemToRemove, 1);
          
        }
      }
    },
   removeitems:(state)=>{
    state.value=[]
   }
  },
})


export const navsetting=createSlice({
  name:'navsetting',
  initialState:{
    value:false
  ,},
  reducers:{
    activehome:(state)=>{
      state.value=true
    },
    activecart:(state)=>{
      state.value=false
    }
  }

})
// Action creators are generated for each case reducer function
export const { increment, decrement,removeitems } = counterSlice.actions
export const { activehome, activecart } = navsetting.actions

export default {counter:counterSlice.reducer,navigation:navsetting.reducer}