import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import OwnRecipePage from '../pages/OwnRecipePage/index';
import RecipePage from "../pages/RecipePage";
import RegisterPage from "../pages/RegisterPage";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="login" element={<LoginPage/>} />
                    <Route path="/logout" element={<LogoutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/recipe" element={<RecipePage />} />
                <Route path="/cart" element={<CartPage />} />
                    <Route path="ownRecipe" element={<OwnRecipePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
 
export default Routing
