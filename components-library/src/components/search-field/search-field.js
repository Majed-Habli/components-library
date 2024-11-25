import React from "react";
import "./search-field.scss";

const SearchField = () => {
    return (
        <div className="form-group">
            <input type="text" id="name" placeholder="search"></input>
            <label for="name">Name</label>
        </div>
    )
}

export default SearchField;