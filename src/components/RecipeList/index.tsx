import RecipeItem from "../RecipeItem";
import { RootState } from '../../state/reducers/index';
import { useSelector } from 'react-redux';

    const recipes = [
        // {
        //     id: 123,
        //     name: "Fresh Basil Fettuccine Pasta with Tomatoes",
        //     img: "logo.png",
        //     description: "Flavorful sauce for fresh basil fettuccine simply by cooking sweet tomatoes with aromatic garlic, verdant zucchini, and a touch of spicy crushed red pepper.",
        //     ingredients: ["1/2lb Fresh Basil Fettuccine Pasta", "2 cloves Garlic", "14-Oz can Tomatoes (Peeled)", "1 Zucchini", "1 oz Salted Butter", "1/4 cup Grated Parmesan Cheese", "2 Tbsps Creme Fraichie", "1/4 tsp Crushed Red Pepper Flakes"],
        //     directions: ["direction A", "direction B"],
        //     price: 10.99,
        //     tags: ["tag-a", "tag-c"]
        // },
        {
            id: 321,
            name: "Recipe A",
            img: "logo.png",
            description: "some recipe description here",
            ingredients: ["ingredient A", "ingredient B"],
            directions: ["direction A", "direction B"],
            price: 14.99,
            tags: ["tag-a", "tag-c"]
        },
        {
            id: 321,
            name: "Recipe B",
            img: "logo.png",
            description: "some recipe description here",
            ingredients: ["ingredient A", "ingredient B"],
            directions: ["direction A", "direction B"],
            price: 14.99,
            tags: ["tag-b", "tag-c"]
        },
        {
            id: 456,
            name: "Recipe C",
            img: "logo.png",
            description: "some recipe description here",
            ingredients: ["ingredient A", "ingredient B"],
            directions: ["direction A", "direction B"],
            price: 14.99,
            tags: ["tag-a", "tag-c"]
        },
        {
            id: 654,
            name: "Recipe D",
            img: "logo.png",
            description: "some recipe description here",
            ingredients: ["ingredient A", "ingredient B"],
            directions: ["direction A", "direction B"],
            price: 14.99,
            tags: ["tag-b", "tag-c"]
        }
    ]
const RecipeList = () => {
    const state = useSelector((state: RootState) => state.user);

    return(
        <ul className="list-group list-group-horizontal">
            {recipes.filter(recipe => state.tags.every((tag: string) => recipe.tags.includes(tag)))
            .map(recipe => <div className="col-3"><li className="list-group-item"><RecipeItem data={recipe}/></li></div>)}
        </ul>
    )
};
export default RecipeList;