import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RecipeState } from "../../state/actions";
import * as Creators from "../../state/creators";
import { RootState } from "../../state/reducers";
import RecipeItem from "../RecipeItem";
import { CSSProperties } from "react";

const ulStyle: CSSProperties = {
    display: "flex",
    flexFlow: "row wrap"
}

const RecipeList = () => {
    const state = useSelector((state: RootState) => state.user);
    const [recipes, setRecipes] = useState<RecipeState[]>([]);
    const [tag, setTag] = useState("");
    const [tagList, setTagList] = useState<string[]>(state.tags);
    const premadeTags = ["tag-a", "tag-b", "tag-c", "tag-d", "tag-e", "tag-f"];
    const dispatch = useDispatch();
    const {addToTagsCreator, removeFromTagsCreator} = bindActionCreators(Creators, dispatch);
    useEffect(() => {
        axios.get("http://localhost:9001/recipes")
        .then(response => {
            let newState: RecipeState[] = [];
            for(let i = 0; i < response.data.length; i++) {
                newState.push({
                    ...response.data[i],
                    ingredients: JSON.parse(response.data[i].ingredients),
                    directions: JSON.parse(response.data[i].directions),
                    tags: JSON.parse(response.data[i].tags)
                });
            };
            setRecipes(newState);
        })
        .catch(error => {console.error(error);})
    }, []);
    function onChangeHandler(event: any) {
        setTag((document.getElementById("tagsearch") as HTMLInputElement).value);
        setTag(event.target.value)
    }
    function onClickHandler(event: any) {
        event.preventDefault();
        if (tag !== "") {
            for (let i = 0; i < tag.split(" ").length; i++) {
                if (!tagList.includes(tag.split(" ")[i])) {
                    addToTagsCreator(tag.split(" ")[i]);
                };
            };
            setTagList([...tagList]);
        };
    }
    function onButtonClickHandler() {
        for (let i = 0; i < state.tags.length; i++) {
            removeFromTagsCreator(state.tags[i]);
        };
        setTagList([]);
    }
    function onTagClickHandler(tag: string) {
        if (!tagList.includes(tag)) {
            addToTagsCreator(tag);
        }
        setTagList([...tagList]);
    }
    return (
        <div className="row">
            <div className="col-3">
                <ul className="list-group list-group-horizontal" style={ulStyle}>
                    <li className="list-group-item border-0">
                        <button type="button" className="btn btn-danger btn-sm" onClick={onButtonClickHandler}>Clear</button>
                    </li>
                    {state.tags.map((tag: string) => <li className="list-group-item border-0">{tag}</li>)}
                </ul>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" onChange={onChangeHandler} id="tagsearch"/>
                                <button className="btn btn-outline-success" type="submit" onClick={onClickHandler} id="search">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <ul className="list-group list-group-horizontal" style={ulStyle}>
                    {premadeTags.map((tag: string) => <li className="list-group-item border-0">
                        <button className="btn btn-success" onClick={() => onTagClickHandler(tag)}>{tag}</button>
                    </li>)}
                </ul>
            </div>
            <div className="col-9">
                <ul className="list-group list-group-horizontal" style={ulStyle}>
                    {recipes.filter(recipe => state.tags.every((tag: string) => recipe.tags.includes(tag)))
                    .map(recipe => <div className="col-3"><li className="list-group-item border-0"><RecipeItem data={recipe}/></li></div>)}
                </ul>
            </div>
        </div>
    )
};

export default RecipeList;