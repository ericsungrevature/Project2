import { useSelector } from "react-redux";
import { RecipeState } from "../../state/actions";
import { RootState } from "../../state/reducers";
import CartItem from "../CartItem";

const CartList = () => {
    const state = useSelector((state: RootState) => state.user);
    if(state.cart.length === 0) {
        return <p>Cart is Empty</p>;
    } else {
        return (
            <ul className="list-group">
                {state.cart.map((recipe: RecipeState) => <CartItem data={recipe} />)}
            </ul>
        );
    }
};

export default CartList;