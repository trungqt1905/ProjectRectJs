import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "api/userApi";



export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
        //call api to register 
        const data = await UserApi.register(payload);
        //save date to loval stored
        localStorage.setItem('access_token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user));
        // return user data
        return data.user;
    }
)

const userSlide = createSlice({
    name: 'user',
    initialState: {
        current: {},
        loading: {},
    },
    reducers: {

    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload
        },
    }
});

const { reducer } = userSlide
export default reducer; //Default export