import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RecipeState } from "../../state/actions";
import { RootState } from "../../state/reducers";
import RecipeItem from "../RecipeItem";

const RecipeList = () => {
    const state = useSelector((state: RootState) => state.user);
    const [recipes, setRecipes] = useState<RecipeState[]>([])
    useEffect(() => {
        axios.get("http://localhost:9001/recipes")
        .then(response => {
            let newState: RecipeState[] = [];
            for(let i = 0; i < response.data.length; i++) {
                newState.push({
                    ...response.data[i],
                    ingredients: JSON.parse(response.data[i].ingredients),
                    directions: JSON.parse(response.data[i].directions),
                    tags: JSON.parse(response.data[i].ingredients)
                });
            };
            setRecipes(newState);
        })
        .catch(error => {console.error(error);})
    }, []);
    return (
        <ul className="list-group list-group-horizontal">
            {recipes.filter(recipe => state.tags.every((tag: string) => recipe.tags.includes(tag)))
            .map(recipe => <div className="col-3"><li className="list-group-item"><RecipeItem data={recipe}/></li></div>)}
        </ul>
    )
};

export default RecipeList;