import Display from "../../components/Display";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
    return (
        <div>
            <Navbar />
            {/* <Display /> */}
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default RegisterPage;