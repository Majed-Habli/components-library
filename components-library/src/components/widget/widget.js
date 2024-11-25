import React from "react";
import "./widget.scss";

const WidgetList = ({ widgets }) => {
    return (
        <fieldset>
            <legend className="sr-only">Select a widget</legend>

            {widgets.map((widget, index) => (
                <div key={index}>
                <input 
                    type="radio" 
                    id={widget.label + index} 
                    name="widget"
                    value={widget.label} 
                />
                <label htmlFor={widget.label + index} className="radio-label">
                    <img 
                    src={widget.icon} 
                    alt={`${widget.label} icon`}
                    />
                    <span>{widget.label}</span>
                </label>
                </div>
            ))}
        </fieldset>
    )
}

export default WidgetList;