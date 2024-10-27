import React from "react";
import classNames from 'classnames';
import './icon-button.scss';
import * as Icons from '@heroicons/react/24/solid';

const IconButton = ({iconName, mode, size, theme}) => {

    const buttonClass = classNames('IconButton', {
        [`btn--${mode}`]: mode,
        [`btn--${size}`]: size,
        [`btn--${theme}`]: theme,
        [`hover--${theme}`]: theme,
      });

    const IconComponent = Icons[iconName];

    return (
        <button className={buttonClass}>
            <IconComponent/>
        </button>
    )
}

export default IconButton;