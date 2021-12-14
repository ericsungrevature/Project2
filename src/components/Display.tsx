import { useSelector } from "react-redux"
import { RootState } from "../state/reducers"
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Display = () => {
    const state = useSelector((state: RootState) => state.user);
    return (
        <div>
            <h1>Welcome {state.firstName} {state.lastName} ({state.id})</h1>
            <h2>Username: {state.username}, Password: {state.password}, Email: {state.email}</h2>
        </div>
    )
}

export default Display;