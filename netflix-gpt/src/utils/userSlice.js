import { createSlice } from "@reduxjs/toolkit";

//add user so that sign in becomes easy 
//remove user so that sign out becomes easy 

const userSlice = createSlice({
    name:"user",
    initialState: null, 
    reducers:{
        addUser: (state, action) =>{
            return action.payload;
        },
        removeUser: (state,action) =>{
            return null;
        },
    },
},);

export const{addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
