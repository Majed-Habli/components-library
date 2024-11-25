import React from "react";
import SearchField from "components/search-field/search-field";
import "./sidebar.scss";
import WidgetList from "components/widget/widget";
import {WidgetsMetaData} from "../../constants/strings";


const Sidebar = () => {
    return (
        <div className="main-sidebar">
            {/* add the buttons for sorting the search bar layout */}
            <SearchField/>
            <WidgetList widgets={WidgetsMetaData}/>
        </div>
    )
}

export default Sidebar;