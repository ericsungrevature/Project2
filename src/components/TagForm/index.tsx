import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as Creators from "../../state/creators";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { useState } from "react";

const TagForm = () => {
    const [tag, setTag] = useState("");

    const state = useSelector((state: RootState) => state.user);
    // const state = JSON.parse(String(localStorage.getItem("user_state")));
    const dispatch = useDispatch();
    const {addToTagsCreator} = bindActionCreators(Creators, dispatch);
    function onChangeHandler(event: any) {
        setTag((document.getElementById("tagsearch") as HTMLInputElement).value);
        setTag(event.target.value)
    }
    function onClickHandler(event: any) {
        event.preventDefault();
        if (tag !== "") {
            addToTagsCreator(tag);
        };
    }
    return (
        <div>
            <ul className="list-group list-group-horizontal">
                {state.tags.map((tag: string) => <li className="list-group-item">{tag}</li>)}
                {/* {state.tags.filter((val) => {
                    if(tag === ""){
                        return val
                    } else if(val.toLowerCase().includes(tag.toLocaleLowerCase())){
                        return val
                    }
                })} */}
            </ul>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" onChange={onChangeHandler} id="tagsearch"/>
                            <button className="btn btn-outline-success" type="submit" onClick={onClickHandler}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TagForm;