import React, {useEffect} from 'react';
import './Counter.css';
import {useDispatch, useSelector} from "react-redux";
import {
    closeModal,
    fetchCounter,
    sendCounter
} from "../../store/actions";
import Modal from "../../components/UI/Modal/Modal";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    const incrementCounterHandler = () => {
        dispatch(sendCounter(counter + 1));
    };
    const decrementCounterHandler = () => {
        dispatch(sendCounter(counter - 1));
    };
    const addCounterHandler = () => {
        dispatch(sendCounter(counter + 5));
    };
    const subtractCounterHandler = () => {
        dispatch(sendCounter(counter - 5));
    };

    useEffect(() => {
        dispatch(fetchCounter());
    }, [dispatch]);

    return (
        <div className="Counter">
            {error &&
            <Modal
                show={error}
                closed={() => dispatch(closeModal())}
            >
                <p>{error.message}</p>
            </Modal>}
            <h1>{counter}</h1>
            <button onClick={incrementCounterHandler} disabled={loading}>Increase</button>
            <button onClick={decrementCounterHandler} disabled={loading}>Decrease</button>
            <button onClick={addCounterHandler} disabled={loading}>Increase by 5</button>
            <button onClick={subtractCounterHandler} disabled={loading}>Decrease by 5</button>
        </div>
    );
};

export default Counter;