import Display from "../../components/Display";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import RecipeList from "../../components/RecipeList";
import TagForm from "../../components/TagForm";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <TagForm />
            <RecipeList />
            <Display />
            <Footer />
        </div>
    );
};

export default HomePage;