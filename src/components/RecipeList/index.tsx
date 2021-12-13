import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import RecipeItem from "../RecipeItem";

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    const recipes = [
        {
            id: 123,
            name: "Recipe A",
            img: "logo.png",
            description: "some recipe description aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            ingredients: ["ingredient A", "incredient B"],
            directions: ["direction A", "direction B"],
            price: 10.99,
            tags: ["tag-a", "tag-c"]
        },
        {
            id: 321,
            name: "Recipe B",
            img: "logo.png",
            description: "some recipe description bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            ingredients: ["ingredient A", "incredient B"],
            directions: ["direction A", "direction B"],
            price: 14.99,
            tags: ["tag-b", "tag-c"]
        }
    ]
    //////////////////////////////////////////////////////////////////////////////////////////////////////
const RecipeList = () => {
    const state = useSelector((state: RootState) => state.user);
    // const state = JSON.parse(String(localStorage.getItem("user_state")));
    return (
        <ul className="list-group list-group-horizontal">
            {recipes.filter(recipe => state.tags.every((tag: string) => recipe.tags.includes(tag)))
            .map(recipe => <div className="col-3"><li className="list-group-item"><RecipeItem data={recipe}/></li></div>)}
        </ul>
    )
};

export default RecipeList;