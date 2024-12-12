import React from "react";
import "./checkbox.scss";
import classNames from 'classnames';

const CheckBox = ({ id, name, label, checked, onChange, size, theme }) => {

    const checkboxClasses = classNames('checkbox-container', {
        [`cb--${size}`]: size,
        [`cb--${theme}`]: theme,
      });

    return (
        <div className={checkboxClasses}>
            <input
                type="checkbox"
                id={id}
                name={name}
                className="checkbox-input"
                checked={checked}
                aria-checked= {checked}
                onChange={onChange}
            />
            <label htmlFor={id} className={"checkbox-label"}>
                <span className="checkbox-custom"></span>
                {label}
            </label>
        </div>
    );
};

export default CheckBox;
