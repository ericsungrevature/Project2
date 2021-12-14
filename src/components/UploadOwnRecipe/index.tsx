import React, {useCallback, useState} from "react";
import Dropzone from "../Drop";
import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';
import * as Creators from "../../state/creators";
import axios from 'axios';

const UploadOwnRecpie = () => {
    const [recipes, setRecipes] = useState({
        price: 0,
        img: "",
        name: "",
        description: "",
        ingredients: [],
        directions: [],
        tags: []
    });

    const onDrop = useCallback(acceptedFile => {
        console.log(acceptedFile);
    }, []);

    function onChangeHandler(event:any){
        setRecipes({...recipes,
        [event.target.name]: event.target.value
        });
    };
    
    const dispatch = useDispatch();
    const {addRecipeCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onSubmitHandler(event: any){
        event.preventDefault();
        axios.post('http://localhost:9001/recipes', recipes)
        .then(response => {
            console.log(response.data)
            addRecipeCreator({
                ...recipes,
                id: response.data.id
            });
            navigate("/");
        })
        .catch(error => {
            console.error(error)
        })
    }
    
    return(
        <div>
            <div className="ownRecipe">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="wrapper">
                            <h1>Upload Your Own Recipe</h1>
                            <p>You can upload your own recipe here.</p>
                            <form method="post" onSubmit={onSubmitHandler}>
                                <div className="form-group">
                                    <label htmlFor="">Name of the Recipe</label><br/>
                                    <input type="text" className="text" name="name" placeholder="Name" value={recipes.name} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Price of the Recipe</label><br/>
                                    <input type="text" className="text" name="price" placeholder="$0.00" value={recipes.price} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description</label><br/>
                                    <textarea className="textarea" name="description" placeholder="Description..." value={recipes.description} onChange={onChangeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Ingredients</label><br/>
                                    <textarea className="textarea" name="ingredient" placeholder="Ingredients: A, B, C... " value={recipes.ingredients} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Direction</label><br/>
                                    <textarea className="textarea" name="direction" placeholder="Directions: step1. step2. step3 ..." value={recipes.directions} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Tag</label><br/>
                                    <form>
                                        <input type="text" placeholder="add ingredient" name="tagName"/>
                                        <button className="btn btn-success" type="submit"  >Add Tag</button>
                                    </form>
                                    <textarea className="text" name="tag" placeholder="Tag: A, B, C..." value={recipes.tags} onChange={onChangeHandler} />
                                </div>
                                
                                <p className="ptitle">Drag and Drop the Image</p>
                                <div className="content">
                                    {<Dropzone/>}
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">Post Recipe</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <br/>
        </div>
    )
}
export default UploadOwnRecpie;

