import React from "react";
import "./checkbox.scss";

const CheckBox = ({ id, name, label, checked, onChange }) => {
    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                id={id}
                name={name}
                className="checkbox-input"
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id} className="checkbox-label">
                <span className="checkbox-custom"></span>
                {label}
            </label>
        </div>
    );
};

export default CheckBox;
