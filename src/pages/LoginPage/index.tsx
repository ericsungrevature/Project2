import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import RegisterRequest from "../../components/RegisterRequest";

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <RegisterRequest />
            <Footer />
        </div>
    );
};

export default LoginPage;