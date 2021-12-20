import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import { RootState } from "../../state/reducers";

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
                tags: "[]"//JSON.stringify(state.tags)
            })
            .then(response => {
                navigate("/");
            })
            .catch(error => {console.error(error);})
        }
    };
    return (
        <div className="container my-3 bg-light">
            <h3>{data.name}</h3>
            <div className="row">
                <div className="col-6">
                    <img alt={data.img} />
                    <p className="text-break">{data.tags.map((tag: string) => <span>{"#"+tag+" "}</span>)}</p>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-2">
                            <p>${data.price}</p>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-primary btn-sm" onClick={onClickHandler}>Add Item to Cart</button>
                        </div>
                    </div>
                    <div className="row text-break py-3">
                        {data.description}
                    </div>
                </div>
            </div>
            <hr />
            <div className="row container py-3">
                <div className="col-2"></div>
                <div className="col-8">
                    <h5>Ingredients</h5>
                    <ul className="list-group">
                        {data.ingredients.map((ingredient: string) => <li className="list-group-item border-0">{ingredient}</li>)}
                    </ul>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row container py-3">
                <div className="col-2"></div>
                <div className="col-8">
                    <h5>Directions</h5>
                    <ol className="list-group list-group-numbered">
                        {data.directions.map((direction: string) => <li className="list-group-item border-0">{direction}</li>)}
                    </ol>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
};

export default RecipeDetail;