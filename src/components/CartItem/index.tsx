import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { RecipeState } from "../../state/actions";
import * as Creators from "../../state/creators";
import { RootState } from "../../state/reducers";

interface ChildComponentProps {
    data: RecipeState;
};

const CartItem: React.FC<ChildComponentProps> = (props) => {
    const state = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const {removeFromCartCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onClickHandler() {
        removeFromCartCreator(props.data);
        axios.post("http://localhost:9001/users/"+state.username, {
            ...state,
            cart: JSON.stringify(state.cart),
            tags: JSON.stringify(state.tags)
        })
        .then(response => {
            navigate("/cart");
        })
        .catch(error => {console.error(error);})
    }
    return (
        <li className="list-group-item">
            <h4>Item #{props.data.id} - {props.data.name}</h4>
            <div className="row">
                <div className="col-3">
                    <img alt={props.data.img} />
                </div>
                <div className="col-7">
                    <ul className="list-group">
                        {props.data.ingredients.map(ingredient => <li className="list-group-item">{ingredient}</li>)}
                    </ul>
                </div>
                <div className="col-2">
                    <p>${props.data.price}</p>
                    <button className="btn btn-primary" onClick={onClickHandler}>Remove from Cart</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;