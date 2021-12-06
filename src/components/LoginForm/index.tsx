import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import './Login.css';

const LoginForm = () => {
    const [user, setUser] = useState({
        id: 0,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    function onChangeHandler(event: any) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    function onClickHandler(event: any) {
        //get user info from database
        setUser({
            ...user,
            id: 137,
            firstName: "John",
            lastName: "Smith",
            email: "j@gmail.com"
        });
    };
    const dispatch = useDispatch();
    const {loginCreator} = bindActionCreators(Creators, dispatch);
    let navigate = useNavigate();
    function onSubmitHandler(event: any) {
        event.preventDefault();
        loginCreator(user);
        navigate("/");
    };
    return (
        <div className="LoginContainer">
            <div className="wrapper">
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={onChangeHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onClickHandler}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;