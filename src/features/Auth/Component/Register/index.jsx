import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Counter/userSlide";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";

Register.propTypes = {};

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            const action = register(values);

            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('New user', user)
        } catch (error) {
            console.log('Failed to register', error)
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;