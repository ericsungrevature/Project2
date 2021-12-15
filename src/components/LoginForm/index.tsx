import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import './Login.css';

const LoginForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();
    const {loginCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onChangeHandler(event: any) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    function onSubmitHandler(event: any) {
        event.preventDefault();
        axios.get("http://localhost:9001/users/"+user.username)
        .then(response => {
            console.log(response.data);
            if(response.data === "") {
                throw new Error("Invalid login");
            } else if (user.password !== response.data.password) {
                throw new Error("Invalid password");
            }
            loginCreator({
                ...response.data,
                cart: JSON.parse(response.data.cart),
                tags: JSON.parse(response.data.tags)
            });
            navigate("/");
        })
        .catch(error => {console.error(error);})
    };
    return (
        <div className="LoginContainer">
            <div className="wrapper">
                <h1>Log In</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username" value={user.username} onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={user.password} onChange={onChangeHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
                <Link to="/register">If you do not have an account click here to register</Link>
            </div>
        </div>
    );
};

export default LoginForm;