import React from "react";
import "./search-field.scss";

const SearchField = () => {
    return (
        <div className="form-group">
            <input type="text" id="search" placeholder="search"></input>
            <label for="search">Search</label>
        </div>
    )
}

export default SearchField;