import Display from "../../components/Display";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import RegisterRequest from "../../components/RegisterRequest";

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <Display />
            <LoginForm />
            {/* <RegisterRequest /> */}
            <Footer />
        </div>
    );
};

export default LoginPage;