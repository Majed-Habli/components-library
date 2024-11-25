import React from "react";
import SearchField from "components/search-field/search-field";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="main-sidebar">
            {/* add the buttons for sorting the search bar layout */}
            <SearchField/>
            {/* components view */}
        </div>
    )
}

export default Sidebar;