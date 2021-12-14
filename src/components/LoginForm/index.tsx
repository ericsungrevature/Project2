import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import RegisterRequest from "../RegisterRequest";
import './Login.css';
import axios from 'axios';

const LoginForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    function onChangeHandler(event: any) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    
    const dispatch = useDispatch();
    const {loginCreator} = bindActionCreators(Creators, dispatch);
    let navigate = useNavigate();
    function onSubmitHandler(event: any) {
        event.preventDefault();
        axios.get('http://localhost:9001/users' + user.username)
        .then(response => {
            console.log(response.data)
            if(response.data === ""){
                alert("Invalid login");
            } else if(user.password !== response.data.password){
                alert("Invalid password");
            }
            loginCreator({
                ...response.data,
                cart: JSON.parse(response.data.cart),
                tags: JSON.parse(response.data.tags)
            });
            navigate("/");
        })
        .catch(error => {
            console.error(error)
        })
        
    };
    return (
        <div className="LoginContainer">
            <div className="wrapper">
                <h1>Log In</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={onChangeHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
                <RegisterRequest/>
            </div>
        </div>
    );
};

export default LoginForm;