import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './couterSlide';

CountFeature.propTypes = {

};

function CountFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const handleInCreaseClick = () => {
        const action = increase(); //Action creator
        console.log(action);
        dispatch(action);
    }
    const handleDeCreaseClick = () => {
        const action = decrease(); //Action creator
        console.log(action);
        dispatch(action);

    }
    return (
        <div>
            Counter : {counter}
            <br />
            <button onClick={handleInCreaseClick}>Increase</button>
            <br />
            <button onClick={handleDeCreaseClick}>Decrease</button>

        </div>
    );
}

export default CountFeature;