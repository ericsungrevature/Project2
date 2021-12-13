import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UploadOwnRecpie from "../../components/UploadOwnRecipe";
import "./ownRecipe.css";

const OwnRecipePage = () => {
    return(
        <div>
            <Navbar/>
            <UploadOwnRecpie/>
            <Footer/>
        </div>
    )
}
export default OwnRecipePage;