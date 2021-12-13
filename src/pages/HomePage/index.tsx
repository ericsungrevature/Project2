import Display from "../../components/Display";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import RecipeList from "../../components/RecipeList";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import TagForm from '../../components/TagForm/index';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="row">
                <div className="col-lg-3">
                    {/* {<Sidebar/>} */}
                </div>
                <div className="col-lg-7">
                    {/* {<TagForm/>}
                    {<RecipeList/>} */}
                    <Search/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;