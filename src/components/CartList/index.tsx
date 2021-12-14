import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { RecipeState } from "../../state/actions";
import * as Creators from "../../state/creators";
import { RootState } from "../../state/reducers";
import CartItem from "../CartItem";
import { FaShoppingCart } from "react-icons/fa";

const CartList = () => {
    const state = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const {emptyCartCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState<RecipeState[]>([]);
    useEffect(() => {
        for (let i = 0; i < state.cart.length; i++) {
            axios.get("http://localhost:9001/recipes/"+state.cart[i])
            .then(response => {
                setRecipes(array => [...array, {
                        ...response.data,
                        ingredients: JSON.parse(response.data.ingredients),
                        directions: JSON.parse(response.data.directions),
                        tags: JSON.parse(response.data.tags)
                }]);
            })
            .catch(error => {console.error(error);})
        }
    }, [])
    function onClickHandler(event: any) {
        event.preventDefault();
        emptyCartCreator();
        axios.post("http://localhost:9001/users/"+state.username, {
            ...state,
            cart: "[]",
            tags: "[]"//JSON.stringify(state.tags)
        })
        .then(response => {
            navigate("/");
        })
        .catch(error => {console.error(error);})
    }
    if(recipes.length === 0) {
        return (
            <div className="container my-3 bg-light">
                <div className="row">
                    <h1>Your Cart <FaShoppingCart/></h1>
                </div>
                <div className="row p-3">
                    <p className="text-right">Cart is Empty</p>
                </div>
            </div>
        );
    } else {
        let sum = 0.0
        for (let i = 0; i < recipes.length; i++) {
            sum += recipes[i].price;
        }
        return (
            <div className="container my-3 bg-light">
                <div className="row">
                    <h1>Your Cart <FaShoppingCart/></h1>
                </div>
                <ul className="list-group">
                    {recipes.map((recipe: RecipeState) => <CartItem data={recipe} />)}
                </ul>
                <div className="row mt-3">
                    <div className="col-10"></div>
                    <div className="col-2">
                        <p className="text-center">Total: ${sum}</p>
                    </div>
                </div>
                <hr />
                <div className="row pb-3">
                    <div className="col-10"></div>
                    <div className="col-2">
                        <button className="btn btn-success" onClick={onClickHandler}>Purchase Items</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default CartList;