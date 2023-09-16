import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/couterSlide'
import userReducer from '../features/Counter/userSlide'
const rootReducer = {
    counter: counterReducer,
    user: userReducer,
};
const store = configureStore({
    reducer: rootReducer,
});
export default store;