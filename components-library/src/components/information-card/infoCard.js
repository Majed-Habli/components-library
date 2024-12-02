import React from "react";
import "./information-card.scss";

const InformationCard = ({widget}) => {
  return (
    <div className="card-container">
      {widget.preview}
      <div className="information-section">
        <img src={widget.icon} alt={`${widget.label} icon`} />
        <div className="component-information">
            <p className="component-name">{widget.label}</p>
            <p className="component-description">{widget.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
