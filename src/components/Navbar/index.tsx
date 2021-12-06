import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../state/reducers";

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
                <a className="navbar-brand" href="/">Project2</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
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
                        <li className="nav-item active">
                            <Link className="nav-link" to="/recipe">Recipe (not complete)</Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>    
        </nav>
    );
};

export default Navbar;