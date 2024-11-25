import React from "react";
import "./search-field.scss";

const SearchField = ({ onSearch }) => {
    return (
        <div className="form-group">
            <input type="text" id="search" placeholder="search" onChange={(e) => onSearch(e.target.value)}></input>
            <label for="search">Search</label>
        </div>
    )
}

export default SearchField;