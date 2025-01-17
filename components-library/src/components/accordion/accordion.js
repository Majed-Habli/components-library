import React, { useState, useRef } from "react";
import "./accordion.scss";
import * as Icons from '@heroicons/react/24/solid';

const Accordion = ({index, trailingIcon, leadingIcon, theme, title, content}) => {
  const [activeLeftIndex, setActiveLeftIndex] = useState(null);

  const panelRefs = useRef([]);
  const TrailingIconComponent = Icons[trailingIcon];
  const LeadingIconComponent = Icons[leadingIcon]

  const toggleAccordion = (index) => {
      setActiveLeftIndex(activeLeftIndex === index ? null : index);
    }
  
  return (
    <div key={index} className="accordion-container">
      <button
        className={`accordion ${activeLeftIndex === index ? "active" : ""} acc--${theme}`}
        onClick={() => toggleAccordion(index)}
        aria-expanded={activeLeftIndex === index}
        aria-controls={`panel-${index}`}
      >
        {leadingIcon && LeadingIconComponent && (
          <span className={`icon-${leadingIcon}`} aria-hidden="true">
            <LeadingIconComponent aria-hidden="true" />
          </span>
        )}

        <span className="button-text">{title}</span>

        {trailingIcon && TrailingIconComponent && (
          <span className="chevron-arrow-icon" >
            <TrailingIconComponent aria-hidden="true"/>
          </span>
        )}
      </button>
      <div
        id={`panel-${index}`}
        ref={(el) => (panelRefs.current[index] = el)}
        className="panel"
        style={{
          height: activeLeftIndex === index ? `${panelRefs.current[index]?.scrollHeight}px` : "0",
          opacity: activeLeftIndex === index ? "1" : "0",
        }}
      >
        <div className="accordion-description">{content}</div>
      </div>
    </div>
  )
};

export default Accordion;
