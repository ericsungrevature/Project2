import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";

const LogoutForm = () => {
    const dispatch = useDispatch();
    const {logoutCreator} = bindActionCreators(Creators, dispatch);
    logoutCreator();
    return (
        <div>
            <h1>You Have Logged Out</h1>
        </div>
    );
};

export default LogoutForm;