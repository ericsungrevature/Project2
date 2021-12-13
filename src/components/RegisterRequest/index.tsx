import { Link } from "react-router-dom";

const RegisterRequest = () => {
    return (
        <div>
            <p>If you do not have an account click here to register</p>
            <button className="btn btn-outline-primary">
                <Link to="/register">If you do not have an account click here to register</Link>
            </button>
        </div>
        
    );
};

export default RegisterRequest;