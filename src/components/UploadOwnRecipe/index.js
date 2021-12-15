import React, {useState} from "react";
import Dropzone from "../Drop";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import * as Creators from "../../state/creators";
import axios from 'axios';
import { FaPlus, FaMinus, FaUtensils } from "react-icons/fa";
import './Upload.css'

const UploadOwnRecpie = () => {
    const [recipes, setRecipes] = useState({
        price: '',
        img: "",
        name: "",
        description: "",
        ingredients: [],
        directions: [],
        tags: []
    });

    // const onDrop = useCallback(acceptedFile => {
    //     console.log(acceptedFile);
    // }, []);

    function onChangeHandler(event){
        setRecipes({...recipes,
        [event.target.name]: event.target.value
        });
    };

    const [ingLists, setIngLists] = useState([
        { ingName: ""},
    ]);
    const handleInput = (index, event) => {
        const {value} = event.target;
        const list = [...ingLists];
        list[index] = value;
        setIngLists(list);
    }
    
    const handleAddIng = () => {
        setIngLists([...ingLists, { ingName: ""}])
    }

    const handleRemoveIng = (index) => {
        const values = [...ingLists];
        values.splice(index, 1);
        setIngLists(values);
    }

    const [dirLists, setDirLists] = useState([
        { dirStep: ""},
    ]);
    const handleInputDir = (index, event) => {
        const {value} = event.target
        const list = [...dirLists];
        list[index] = value;
        setDirLists(list);
    }

    const handleAddDir = () => {
        setDirLists([...dirLists, { dirStep: ""}])
    }

    const handleRemoveDir = (index) => {
        const values = [...dirLists];
        values.splice(index, 1);
        setDirLists(values);
    }

    const [ownTags, setOwnTags] = useState([
        { tagName: ''}
    ]);
    const handleInputTag = (index, event) => {
        const {value} = event.target
        const list = [...ownTags];
        list[index] = value;
        setOwnTags(list);
    }

    const handleAddTag = () => {
        setOwnTags([...ownTags, { tagName: ''}])
    }

    const handleRemoveTag = (index) => {
        const values = [...ownTags];
        values.splice(index, 1);
        setOwnTags(values);
    }

    
    const dispatch = useDispatch();
    const {addRecipeCreator} = bindActionCreators(Creators, dispatch);
    const navigate = useNavigate();
    function onSubmitHandler(event){
        event.preventDefault();
        axios.post('http://localhost:9001/recipes', {...recipes, ingredients: JSON.stringify(ingLists), directions: JSON.stringify(dirLists), tags: JSON.stringify(ownTags)})
        .then(response => {
            console.log(response.data)
            addRecipeCreator({
                ...recipes,
                id: response.data.id
            });
            
        })
        .catch(error => {
            console.error(error)
        })
        navigate("/");
    }
    
    return(
        <div className="uploadContainer">
            <div className="containerChild uploadThumbnail">
                <div className="childLogo">
                    <h1></h1>
                </div>
                <div className="uploadThumbnailContent text-center">
                    <h1 className="headingPrimary">You Can Upload Your Own<br/> <FaUtensils/>  Recipes! <FaUtensils/></h1>
                    <h2 className="headingSecondary">Feel good about your dish and want to share it with others?</h2><br/>
                    <h1 className="textHeading">Steps For Uploading Your Recipe:</h1>
                    <p className="text">Step1: Add Name of the Dish / Recipe.</p>
                    <p className="text">Step2: Add Approximate Price.</p>
                    <p className="text">Step3: Add Description of the Dish / Recipe.</p>
                    <p className="text">Step4: Add Needed Ingredients.</p>
                    <p className="text">Step5: Add Cooking Directions.</p>
                    <p className="text">Step6: Add Tag for the Recipe.</p>
                    <p className="text">Step7: Add Image of the Complete Dish.</p>
                    <p className="text">Step8: Click Upload button!</p>
                </div>
            </div>
            <div className="containerChild uploadForm">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="">Name of the Recipe</label><br/>
                        <input type="text" className="text" name="name" placeholder="Name" value={recipes.name} onChange={onChangeHandler} required/>
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
                            {
                                ingLists.map((ingList, index) => (
                                    <div key={index}>
                                        <input type="text" className="text" name="ingName" placeholder="Name and amount" value={ingList.ingName} onChange={event => handleInput(index, event)}/>
                                        <div className="btn-box">
                                            {ingLists.length !== 1 && <button className="btn btn-danger btn-sm"
                                                onClick={() => handleRemoveIng(index)}><FaMinus/> Remove</button>}
                                            {ingLists.length - 1 === index && <button className="btn btn-success btn-sm" onClick={handleAddIng}><FaPlus/> Add</button>}
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Direction</label><br/>
                            {
                                dirLists.map((dirList, index) => (
                                    <div key={index}>
                                        <input type="text" className="text" name="dirStep" placeholder="Steps" value={dirList.dirStep} onChange={event => handleInputDir(index, event)}/>
                                        <div className="btn-box">
                                            {dirLists.length !== 1 && <button className="btn btn-danger btn-sm"
                                                onClick={() => handleRemoveDir(index)}><FaMinus/> Remove</button>}
                                            {dirLists.length - 1 === index && <button className="btn btn-success btn-sm" onClick={handleAddDir}><FaPlus/> Add</button>}
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tag</label><br/>
                            {
                                ownTags.map((ingList, index) => (
                                    <div key={index}>
                                        <input type="text" className="text" name="tagName" placeholder="Tag Name" value={ownTags.tagName} onChange={event => handleInputTag(index, event)}/>
                                        <div className="btn-box">
                                            {ownTags.length !== 1 && <button className="btn btn-danger btn-sm"
                                                onClick={() => handleRemoveTag(index)}><FaMinus/> Remove</button>}
                                            {ownTags.length - 1 === index && <button className="btn btn-success btn-sm" onClick={handleAddTag}><FaPlus/> Add</button>}
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                    <p className="ptitle">Drag and Drop the Image</p>
                        <div className="content">
                            {<Dropzone/>}
                        </div><br/>
                    <input className="btn btn--form" type="submit" value="Post Recipe" />
                </form>  
            </div>
        </div>
    )
}
export default UploadOwnRecpie;

