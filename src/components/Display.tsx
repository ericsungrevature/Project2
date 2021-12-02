import React from "react";
import { useSelector } from "react-redux";
import reducer from '../store/reducer'

const Display = () => {
    const id = useSelector(state => state.id);
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
};

export default Display;