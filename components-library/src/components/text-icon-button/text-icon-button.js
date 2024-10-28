import React from "react";
import './text-icon-button.scss';
import classNames from 'classnames';
import * as Icons from '@heroicons/react/24/solid';

const TextIconButton = ({text, mode, size, theme, leadingIcon, trailingIcon}) => {

    const buttonClass = classNames('textIconButton', {
        [`tib--btn--${mode}`]: mode,
        [`tib--btn--${size}`]: size,
        [`tib--btn--${theme}`]: theme,
        [`tib--hover--${theme}`]: theme,
    });

    const LeadingIconComponent = leadingIcon ? Icons[leadingIcon] : null;
    const TrailingIconComponent = trailingIcon ? Icons[trailingIcon] : null;

    return (
        <button className={buttonClass}>
            {LeadingIconComponent && <LeadingIconComponent className="leading-icon"/>}
            {text}
            {TrailingIconComponent && <TrailingIconComponent className="trailing-icon"/>}
        </button>
    );
};

export default TextIconButton;
