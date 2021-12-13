import React, {useState} from "react";
import RecipeList from "../RecipeList";
import TagForm from "../TagForm";
import './Sidebar.css';

const Sidebar = () => {
    // const [query, setQuery] = useState([]);

    return(
        <div className="sidebar">
            <h4>Search by Tags</h4>
            {/* <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-primary">Search</button>
            </div> */}
            <TagForm/>
            {/* <h4>Tags</h4>
            <ul className="list-group">
                <li className="list-group-item">Tag1</li>
                <li className="list-group-item">Tag2</li>
                <li className="list-group-item">Tag3</li>
                <li className="list-group-item">Tag4</li>
            </ul>
            <br/>
            <h4>Active Tags</h4>
            <ul className="list-group">
                <li className="list-group-item">Tag1</li>
            </ul> */}
        </div>
    )
}
export default Sidebar;