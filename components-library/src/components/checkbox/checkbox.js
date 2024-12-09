import React from "react";

const CheckBox = ({ id, name, label, checked, onChange }) => {
    return (
        <div>
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default CheckBox;