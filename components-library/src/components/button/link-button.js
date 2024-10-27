import React from "react";
import classNames from 'classnames';
import './button.scss';

const LinkButton = ({text, mode, size, theme, href}) => {
    
    const buttonClass = classNames('button', {
        [`btn--${mode}`]: mode,
        [`btn--${size}`]: size,
        [`btn--${theme}`]: theme,
        [`hover--${theme}`]: theme,
        [`link`]: href,
      });

    return (
        <a className={buttonClass} href={href || "#"} tabIndex="0">{text}</a>
    )
}

export default LinkButton;