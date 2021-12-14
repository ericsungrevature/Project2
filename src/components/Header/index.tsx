import './Header.css';
import {FaCrown} from "react-icons/fa";

const Header = () => {
    return(
        <div className="jumbotron">
            <h1 className="display-4">Welcome to<br/> <FaCrown/> Cook King</h1>
            <h2 className="display">In here, you can view recipes and order<br/>
            You can cook your favorite meals at your home just like a chef</h2>
        </div>
    );
};

export default Header;