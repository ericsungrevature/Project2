import React from "react";
import { useDispatch } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch({type: "increment"});
    };
    return (
        <div>
            <button onClick={ incrementHandler } className="btn btn-primary">Increment</button>
        </div>
    );
};

export default Counter;