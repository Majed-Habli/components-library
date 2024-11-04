import React from "react";
import classNames from "classnames";
import "../button/button.scss";

const LinkButton = ({ text, mode, size, theme, href, ariaLabel, disabled }) => {
  const buttonClass = classNames("button", {
    [`btn--${mode}`]: mode,
    [`btn--${size}`]: size,
    [`btn--${theme}`]: theme,
    [`hover--${theme}`]: theme,
    [`link`]: href,
  });

  return (
    <a
      className={buttonClass}
      href={disabled ? undefined : href}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {text}
    </a>
  );
};

export default LinkButton;
