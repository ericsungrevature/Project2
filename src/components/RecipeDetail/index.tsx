import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import { RootState } from "../../state/reducers";
import axios from 'axios';


const RecipeDetail = () => {
    const state = useSelector((state: RootState) => state.user);
    const location = useLocation();
    const {data} = location.state;
    const dispatch = useDispatch();
    const {addToCartCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onClickHandler(event: any) {
        if (state.username === "") {
            navigate("/login");
        } else {
            addToCartCreator(data.id);
            axios.post("http://localhost:9001/users/"+state.username, {
                ...state,
                cart: JSON.stringify(state.cart),
                tags: JSON.stringify(state.tags)
            })
            .then(response => {
                navigate("/");
            })
            .catch(error => {console.error(error);})
        }
    };

    return (
        <li className="list-group-item">
            <h3>{data.name}</h3>
            {/* <div className="row"></div> */}
            <div className="row">
                <div className="col-6">
                    <img alt={data.img} />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <span>Price: ${data.price}</span>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-primary btn-sm" onClick={onClickHandler}>Add Item to Cart</button>
                        </div>
                    </div>
                    <div className="row text-break">
                        {data.description}
                    </div>
                </div>
            </div>
            <div className="row">
                <h5>Ingredients</h5>
            </div>
            <div className="row">
                <ul className="list-group">
                    {data.ingredients.map((ingredient: string) => <li className="list-group-item border-0">{ingredient}</li>)}
                </ul>
            </div>
            <div className="row">
                <h5>Directions</h5>
            </div>
            <div className="row">
                <ol className="list-group list-group-numbered">
                    {data.directions.map((direction: string) => <li className="list-group-item border-0">{direction}</li>)}
                </ol>
            </div>
        </li>
    );
};

export default RecipeDetail;