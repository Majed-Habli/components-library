import React, { useState, useRef } from "react";
import "./accordion.scss";
import * as Icons from '@heroicons/react/24/solid';

const Accordion = ({index, iconName}) => {
  const [activeLeftIndex, setActiveLeftIndex] = useState(null);

  const panelRefs = useRef([]);
  const IconComponent = Icons[iconName];

  const toggleAccordion = (index) => {
      setActiveLeftIndex(activeLeftIndex === index ? null : index);
    }
    console.log(Icons);
  return (
    <div key={index} className="accordion-container">
      <button
        className={`accordion ${activeLeftIndex === index ? "active" : ""}`}
        onClick={() => toggleAccordion(index)}
      >
        <span className={`icon-${iconName}`} aria-hidden="true">
          <img src={`./${iconName}.svg`} alt={`${iconName} icon`} />
        </span>
        <span className="button-text">Statement</span>
        <span className="chevron-arrow-icon" >
          <IconComponent aria-hidden="true"/>
        </span>
      </button>
      <div
        ref={(el) => (panelRefs.current[index] = el)}
        className="panel"
        style={{
          height: activeLeftIndex === index ? `${panelRefs.current[index]?.scrollHeight}px` : "0",
          opacity: activeLeftIndex === index ? "1" : "0",
        }}
      >
        <div>Accordian text</div>
      </div>
    </div>
  )
};

export default Accordion;
