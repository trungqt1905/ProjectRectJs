import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "api/userApi";
import StorageKey from "constants/storage-keys";



export const register = createAsyncThunk(
    'users/register',
    async (payload) => {
        //call api to register 
        const data = await UserApi.register(payload);
        //save date to loval stored
        localStorage.setItem(StorageKey.TOKEN, data.jwt)
        localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
        // return user data
        return data.user;
    }
)

export const login = createAsyncThunk(
    'users/login',
    async (payload) => {
        //call api to register 
        const data = await UserApi.login(payload);
        //save date to loval stored
        localStorage.setItem(StorageKey.TOKEN, data.jwt)
        localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
        // return user data
        return data.user;
    }
)

const userSlide = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKey.USER)) || {},
    },
    reducers: {
        logout(state) {
            localStorage.removeItem(StorageKey.USER);
            localStorage.removeItem(StorageKey.TOKEN);
            state.current = {};
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload
        },
    }
});

const { actions, reducer } = userSlide
export const { logout } = actions;
export default reducer; //Default export