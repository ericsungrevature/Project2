import CartList from "../../components/CartList";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { CSSProperties } from "react";

const cartStyle: CSSProperties = {
    backgroundColor: "gray"
}

const CartPage = () => {
    return (
        <div style={cartStyle}>
            <Navbar />
            <CartList />
            <Footer />
        </div>
    );
};

export default CartPage;