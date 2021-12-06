import React from "react";
import { RecipeState } from "../../state/actions";

interface ChildComponentProps {
    data: RecipeState;
};

const CartItem: React.FC<ChildComponentProps> = (props) => {
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
                <div className="col-2">${props.data.price}</div>
            </div>
        </li>
    );
};

export default CartItem;