import React from "react";
import classNames from 'classnames';
import './button.scss';

const Button = ({text, mode, size, theme, ariaLabel, disabled}) => {

    const buttonClass = classNames('button', {
        [`btn--${mode}`]: mode,
        [`btn--${size}`]: size,
        [`btn--${theme}`]: theme,
        [`hover--${theme}`]: theme,
      });

    return (
        <button className={buttonClass} aria-label={ariaLabel || text} disabled={disabled} >
            {text}
        </button>
    )
}

export default Button;