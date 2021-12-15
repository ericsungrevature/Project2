import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import axios from 'axios';
import './RegForm.css';
import { FaCrown } from 'react-icons/fa';

const RegisterForm = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        cart: "[]",
        tags: "[]"
    });

    function onChangeHandler(event: any) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    
    const dispatch = useDispatch();
    const {registerCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onSubmitHandler(event: any) {
        event.preventDefault()
        axios.post('http://localhost:9001/users', user)
        .then(response => {
            console.log(response.data)
            registerCreator({
                ...user,
                id: response.data.id,
                cart:[],
                tags:[]
            });
        })
        .catch(error => {
            console.error(error)
        })
        navigate("/");
    };
    return (
        <div className="signupContainer">
            <div className="containerSignupChild signupThumbnail">
                <div className="thumbnailLogo">
                    <h1><FaCrown/></h1>
                </div>
                <div className="thumbnailContent text-center">
                    <h1 className="headingPrim">Welcome to Cook King!</h1>
                    <h2 className="headingSecond">Are you ready to to cook?</h2>
                </div>
            </div>
            <div className="containerSignupChild signupForm">
                <h1>Register</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username" value={user.username} onChange={onChangeHandler} required/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={user.password} onChange={onChangeHandler} required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" name="firstName" placeholder="First Name" value={user.firstName} onChange={onChangeHandler} required/>
                    </div>
                    <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={user.lastName} onChange={onChangeHandler} required/>
                    </div>
                    <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="email@email.com" value={user.email} onChange={onChangeHandler} required/>
                    </div>
                    <div className="m-t-lg">
                        <ul className="list-inline">
                        <li>
                            <br/><input className="btn btnForm" type="submit" value="Register" />
                        </li>
                        </ul>
                    </div>
                </form>  
            </div>
        </div>
    );
};

export default RegisterForm;

