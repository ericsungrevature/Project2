import React from "react";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
            <h4>Tags</h4>
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
            </ul>
        </div>
    )
}
export default Sidebar;