import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"",
        email:"",
        role:"admin",
        isSignedIn:false,
    },
    reducers:{
        setName(state,action){
            state.name=action.payload;
        },
        setEmail(state,action){
            state.email=action.payload;
        },
        setRole(state,action){
            state.role=action.payload;
        },
        setIsSignedIn(state,action){
            state.isSignedIn=action.payload;
        },

    }
});


export default userSlice.reducer;

export const {setName,setEmail,setRole,setIsSignedIn}=userSlice.actions;