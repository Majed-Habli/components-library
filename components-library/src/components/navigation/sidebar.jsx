import React, { useState } from "react";
import SearchField from "components/search-field/search-field";
import "./sidebar.scss";
import WidgetList from "components/widget/widget";
import {WidgetsMetaData} from "../../constants/strings";


const Sidebar = ({ onSelectComponent }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredWidgets = WidgetsMetaData.filter((widget) =>
        widget.label.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
        <div className="main-sidebar">
            {/* add the buttons for sorting the search bar layout */}
            <SearchField onSearch={(value) => setSearchTerm(value)}/>
            <WidgetList widgets={filteredWidgets} onSelectComponent={onSelectComponent} />
        </div>
    )
}

export default Sidebar;