import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "features/Counter/userSlide";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm";

Login.propTypes = {};

function Login(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            console.log('New user', user)
        } catch (error) {
            console.log('Failed to login', error)
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;