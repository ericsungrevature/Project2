import React from "react";
import './Header.css';

const Header = () => {
    return(
        <div className="jumbotron">
            <h1 className="display-4">Hello, Customer!</h1>
            <h3 className="lead">You can view recipes and order! <br/>
            You can cook your favorite meals at your home just like a chef!</h3>
            {/* <a className="btn btn-primary btn-lg" href="#" role="button">Start Shopping</a> */}
        </div>
    )
}
export default Header;