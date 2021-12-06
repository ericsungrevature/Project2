import RecipeItem from "../RecipeItem";

const RecipeList = () => {
    const recipes = [
        {
            id: 123,
            name: "Recipe A",
            img: "logo.png",
            description: "some recipe description aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            ingredients: ["ingredient A", "incredient B"],
            directions: ["direction A", "direction B"],
            price: 10.99
        },
        {
            id: 321,
            name: "Recipe B",
            img: "logo.png",
            description: "some recipe description bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            ingredients: ["ingredient A", "incredient B"],
            directions: ["direction A", "direction B"],
            price: 14.99
        }
    ]
    return (
        <ul className="list-group list-group-horizontal">
            {recipes.map(recipe => <div className="col-3"><RecipeItem data={recipe}/></div>)}
        </ul>
    )
};

export default RecipeList;