import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../state/reducers";
import {FaCrown} from "react-icons/fa";

const LoginButton = () => {
    const state = useSelector((state: RootState) => state.user);
    if (state.username === "") {
        return <Link className="nav-link" to="/login">Login</Link>;
    };
    return null;
};

const LogoutButton = () => {
    const state = useSelector((state: RootState) => state.user);
    if (state.username !== "") {
        return <Link className="nav-link" to="/logout">Logout</Link>;
    };
    return null;
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><FaCrown/> Cook King</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <LoginButton />
                        </li>
                        <li className="nav-item active">
                            <LogoutButton />
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/ownRecipe">Upload Recipe</Link>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    );
};

export default Navbar;