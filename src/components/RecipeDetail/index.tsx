import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { RecipeState } from "../../state/actions";
import * as Creators from "../../state/creators";

interface ChildComponentProps {
    data: RecipeState;
};

const RecipeDetail: React.FC<ChildComponentProps> = (props) => {
    const dispatch = useDispatch();
    const {addToCartCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onClickHandler(event: any) {
        addToCartCreator({
            id: props.data.id,
            name: props.data.name,
            img: props.data.img,
            description: props.data.description,
            ingredients: props.data.ingredients,
            directions: props.data.directions,
            price: props.data.price
        });
        navigate("/");
    };
    return (
        <li className="list-group-item">
            <h3>{props.data.name}</h3>
            <div className="row">
                <div className="col-4">
                    <img alt={props.data.img} />
                </div>
                <div className="col-8">
                    <p>{props.data.description}</p>
                </div>
            </div>
            <div className="row">
                <ul className="list-group">
                    {props.data.ingredients.map(ingredient => <li className="list-group-item">{ingredient}</li>)}
                </ul>
            </div>
            <div className="row">
                <ol className="list-group">
                    {props.data.directions.map(direction => <li className="list-group-item">{direction}</li>)}
                </ol>
            </div>
            <div className="row">
                <span>${props.data.price}</span>
                <button type="button" className="btn btn-primary" onClick={onClickHandler}>Add Item to Cart</button>
            </div>
        </li>
    );
};

export default RecipeDetail;