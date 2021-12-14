import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { RecipeState } from "../../state/actions";
import * as Creators from "../../state/creators";
import { RootState } from "../../state/reducers";
import CartItem from "../CartItem";

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
            tags: JSON.stringify(state.tags)
        })
        .then(response => {
            navigate("/");
        })
        .catch(error => {console.error(error);})
    }
    if(recipes.length === 0) {
        return <p className="text-right">Cart is Empty</p>;
    } else {
        let sum = 0.0
        for (let i = 0; i < recipes.length; i++) {
            sum += recipes[i].price;
        }
        return (
            <div>
                <ul className="list-group">
                    {recipes.map((recipe: RecipeState) => <CartItem data={recipe} />)}
                </ul>
                <p>${sum}</p>
                <button onClick={onClickHandler}>Purchase Items</button>
            </div>
        );
    }
};

export default CartList;