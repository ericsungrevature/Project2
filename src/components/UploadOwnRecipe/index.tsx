import React, {useCallback, useState} from "react";
import Dropzone from "../Drop";
import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { addRecipeCreator } from '../../state/creators/index';
import { useNavigate } from 'react-router-dom';
import * as Creators from "../../state/creators";


const UploadOwnRecpie = () => {
    const [recipes, setRecipes] = useState({
        id: 0,
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
    function onClickHandler(event: any){
        setRecipes({
            ...recipes,

        })
    }

    const dispatch = useDispatch();
    const {addRecipeCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onSubmitHandler(event: any){
        event.preventDefault();
        addRecipeCreator(recipes);
        navigate("/");
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
                                    <input type="text" className="text" name="name" value={recipes.name} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Price of the Recipe</label><br/>
                                    <input type="text" className="text" name="price" value={recipes.price} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description</label><br/>
                                    <textarea className="textarea" name="description" value={recipes.description} onChange={onChangeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Ingredients</label><br/>
                                    <textarea className="textarea" name="ingredient" value={recipes.ingredients} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Direction</label><br/>
                                    <textarea className="textarea" name="direction" value={recipes.directions} onChange={onChangeHandler} />
                                </div>
                                
                                <p className="ptitle">Drag and Drop the Image</p>
                                <div className="content">
                                    {<Dropzone/>}
                                </div>

                                <input type="submit" value="Register" className="btn btn-primary btn-large" onClick={onClickHandler} />
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