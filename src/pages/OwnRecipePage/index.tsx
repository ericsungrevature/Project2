import React, {useCallback, useState} from "react";
import Footer from "../../components/Footer";
import Navbar from '../../components/Navbar/index';
import "./ownRecipe.css";

const OwnRecipePage = () => {
    const [recipes, setRecipes] = useState({
        name:'',
        description:'',
        ingredient:'',
        direction:'',
    });

    const onDrop = useCallback(acceptedFile => {
        console.log(acceptedFile);
    }, []);

    function onFormSubmit(e:any){
        e.preventDefault();
    }

    function onChangeHandler(e:any){
        setRecipes({...recipes,
        [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            {<Navbar/>}
            <div className="ownRecipe">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="wrapper">
                            <h1>Upload Own Recipe</h1>
                            <form method="post" onSubmit={onFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">Name of the Recipe</label><br/>
                                    <input type="text" className="text" name="name" value={recipes.name} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Description</label><br/>
                                    <textarea className="textarea" name="description" value={recipes.description} onChange={onChangeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Ingredients</label><br/>
                                    <textarea className="textarea" name="ingredient" value={recipes.ingredient} onChange={onChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Direction</label><br/>
                                    <textarea className="textarea" name="direction" value={recipes.direction} onChange={onChangeHandler} />
                                </div>
                                
                                {/* <p className="ptitle">Drag and Drop the Image</p>
                                <div className="content">
                                    {<Dropzone/>}
                                </div> */}

                                <input type="submit" value="Register" className="btn btn-primary btn-large" />
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <br/>
            {<Footer/>}
        </div>
    )
}
export default OwnRecipePage;