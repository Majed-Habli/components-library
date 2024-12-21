import React from "react";

const DocumentationSection = ({ title, descriptionBefore, listItems, descriptionAfter }) => (
  <div className="documentation-section">
    <h2>{title}</h2>
    {descriptionBefore && <p>{descriptionBefore}</p>}
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {descriptionAfter && <p>{descriptionAfter}</p>}
  </div>
);

export default DocumentationSection;
