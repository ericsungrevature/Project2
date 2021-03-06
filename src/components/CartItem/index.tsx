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
        removeFromCartCreator(props.data.id);
        const newArray = Object.assign([], state.cart);
        const index = newArray.indexOf(props.data.id, 0);
        if (index > -1) {
            newArray.splice(index, 1);
        }
        axios.post("http://localhost:9001/users/"+state.username, {
            ...state,
            cart: JSON.stringify(newArray),
            tags: "[]"//JSON.stringify(state.tags)
        })
        .then(response => {
            navigate("/");
        })
        .catch(error => {console.error(error);})
    }
    return (
        <li className="list-group-item">
            <h4>Item #{props.data.id} - {props.data.name}</h4>
            <div className="row">
                <div className="col-4">
                    <img alt={props.data.img} />
                </div>
                <div className="col-6">
                    <ul className="list-group">
                        {props.data.ingredients.map(ingredient => <li className="list-group-item">{ingredient}</li>)}
                    </ul>
                </div>
                <div className="col-2">
                    <p>${props.data.price}</p>
                    <button className="btn btn-danger" onClick={onClickHandler}>Remove from Cart</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;