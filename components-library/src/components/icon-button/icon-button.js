import React from "react";
import classNames from 'classnames';
import './icon-button.scss';
import * as Icons from '@heroicons/react/24/solid';

const IconButton = ({iconName, mode, size, theme, ariaLabel, disabled}) => {

    const buttonClass = classNames('IconButton', {
        [`i--btn--${mode}`]: mode,
        [`i--btn--${size}`]: size,
        [`i--btn--${theme}`]: theme,
        [`i--hover--${theme}`]: theme,
      });

    const IconComponent = Icons[iconName];

    return (
        <button className={buttonClass} aria-label={ariaLabel || iconName} disabled={disabled} >
            <IconComponent aria-hidden="true"/>
        </button>
    )
}

export default IconButton;