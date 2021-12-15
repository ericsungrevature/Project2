import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as Creators from "../state/creators";
import { RootState } from "../state/reducers";

const Counter = () => {
    const dispatch = useDispatch();
    const {loginCreator, logoutCreator} = bindActionCreators(Creators, dispatch);
    const state = useSelector((state: RootState) => state.user);
    const incrementHandler = () => {
        // loginCreator(1);
    };
    const decrementHandler = () => {
        // logoutCreator();
    };
    return (
        <div>
            <h1>{state.id}</h1>
            <button onClick={ incrementHandler } className="btn btn-primary">Decrement</button>
            <button onClick={ decrementHandler } className="btn btn-primary">Reset</button>
        </div>
    );
};

export default Counter;