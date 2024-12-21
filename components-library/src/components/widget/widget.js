import React, { useState } from "react";
import "./widget.scss";
import InformationCard from "components/information-card/infoCard";

const WidgetList = ({ widgets, onSelectComponent }) => {
  let [showInformationCard, setShowInformationCard] = useState(false);
  let [getComponentInfo, setComponentInfo] = useState(null);

  const handleMouseOver = (e, index) => {
    // Ensure the mouse is truly entering the label, not moving between its children
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowInformationCard(true);
      setComponentInfo(index);
    }
  };
  
  const handleMouseOut = (e) => {
    // Ensure the mouse is truly leaving the label, not moving between its children
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowInformationCard(false);
      setComponentInfo(null);
    }
  };

  const handleSelectWidget = (widget) => {
    onSelectComponent(widget);
  };

  return (
    <fieldset>
      <legend className="sr-only">Select a widget</legend>

      {widgets.map((widget, index) => (
        <div
          key={index}
          onMouseOver={(e) => handleMouseOver(e, index)}
          onMouseLeave={handleMouseOut}
          onClick={() => handleSelectWidget(widget.id)}
        >
          <input
            type="radio"
            id={widget.label + index}
            name="widget"
            value={widget.label}
          />
          <label htmlFor={widget.label + index} className="radio-label">
            <img src={widget.icon} alt={`${widget.label} icon`} />
            <span>{widget.label}</span>
          </label>
        </div>
      ))}

      {showInformationCard && getComponentInfo !== null && (
        <InformationCard widget={widgets[getComponentInfo]} />
      )}
    </fieldset>
  );
};

export default WidgetList;
