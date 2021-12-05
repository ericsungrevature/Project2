import RecipeDetail from "../../components/RecipeDetail";

const RecipePage = () => {
    const data = {
        id: 123,
        name: "some recipe",
        img: "logo.png",
        description: "some recipe",
        ingredients: ["ingredient A", "incredient B"],
        directions: ["some directions"],
        price: 10.99
    }
    return (
        <div>
            <RecipeDetail data={data}/>
        </div>
    );
};

export default RecipePage;