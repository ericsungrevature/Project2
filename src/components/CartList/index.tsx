import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import CartItem from "../CartItem";

const CartList = () => {
    const state = useSelector((state: RootState) => state.cart);
    return (
        <ul className="list-group">
            {state.cart.map(recipe => <CartItem data={recipe} />)}
        </ul>
    );
};

export default CartList;