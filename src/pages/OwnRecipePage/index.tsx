import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import UploadOwnRecpie from "../../components/UploadOwnRecipe";
import UploadOwnRecpie from "../../components/UploadOwnRecipe/index.js";
import "./ownRecipe.css";

const OwnRecipePage = () => {
    return(
        <div>
            <Navbar/>
            {/* <UploadOwnRecpie/> */}
            <UploadOwnRecpie/>
            <Footer/>
        </div>
    )
}
export default OwnRecipePage;