import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";

const RegisterForm = () => {
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
        //get user id from database
        setUser({
            ...user,
            id: 137 //placeholder value
        });
    };
    const dispatch = useDispatch();
    const {registerCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onSubmitHandler(event: any) {
        event.preventDefault()
        registerCreator(user);
        navigate("/");
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" name="username" value={user.username} onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={user.email} onChange={onChangeHandler} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onClickHandler}>Submit</button>
        </form>
    );
};

export default RegisterForm;