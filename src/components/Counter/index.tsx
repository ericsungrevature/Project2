import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as Creators from '../../state/creators/index';
import { RootState } from '../../state/reducers/index';

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
            <button onClick={ incrementHandler } className="btn btn-primary">Increment</button>
            <button onClick={ decrementHandler } className="btn btn-primary">Decrement</button>
        </div>
    );
};

export default Counter;