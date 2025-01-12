import React, { useState, useRef } from "react";
import "./accordion.css";

const Accordion = () => {
  const [activeLeftIndex, setActiveLeftIndex] = useState(null);

  const panelRefs = useRef([]);

  const toggleAccordion = (index) => {
      setActiveLeftIndex(activeLeftIndex === index ? null : index);
    }
  };

  return (
    <div key={index} className="faq-item">
      <button
        className={`accordion ${activeLeftIndex === index ? "active" : ""}`}
        onClick={() => toggleAccordion(index)}
      >
        <span className={`icon-${item.icon}`} aria-hidden="true">
          <img src={`./${item.icon}.svg`} alt={`${item.icon} icon`} />
        </span>
        <span className="button-text">{item.question}</span>
        <span className="chevron-arrow-icon" aria-hidden="true">
          <img src="./chevron-down.svg" alt="Chevron Down" />
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
        <div>{item.answer}</div>
      </div>
    </div>
  )

export default Accordion;
