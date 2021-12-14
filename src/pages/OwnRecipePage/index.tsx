import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UploadOwnRecipe from "../../components/UploadOwnRecipe/index.js";
import "./ownRecipe.css";

const OwnRecipePage = () => {
    return(
        <div>
            <Navbar/>
            <UploadOwnRecipe/>
            <Footer/>
        </div>
    )
}
export default OwnRecipePage;