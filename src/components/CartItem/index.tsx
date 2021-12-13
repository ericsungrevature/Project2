import React from "react";
import {useDispatch} from "react-redux";
import { bindActionCreators } from 'redux';
import { RecipeState } from "../../state/actions";
import * as Creators from "../../state/creators";
import {useNavigate} from "react-router-dom";

interface ChildComponentProps {
    data: RecipeState;
};

const CartItem: React.FC<ChildComponentProps> = (props) => {
    const dispatch = useDispatch();
    const {removeFromCartCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    
    function onClickHandler(){
        removeFromCartCreator(props.data);
        navigate("/cart");
    }

    return (
        <li className="list-group-item">
            <h3>Item #{props.data.id} - {props.data.name}</h3>
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