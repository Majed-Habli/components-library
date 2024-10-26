import React from "react";
import classNames from 'classnames';
import './button.scss';

const Button = ({text, mode, size, theme}) => {

    const buttonClass = classNames('button', {
        [`btn--${mode}`]: mode,
        [`btn--${size}`]: size,
        [`btn--${theme}`]: theme,
        [`hover--${theme}`]: theme,
      });

    return (
        <button className={buttonClass}>
            {text}
        </button>
    )
}

export default Button;