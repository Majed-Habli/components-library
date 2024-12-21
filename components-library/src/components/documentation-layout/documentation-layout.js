import React from "react";
import DocumentationSection from "./documentation-section";
import "./documentation-layout.scss";

const DocumentationLayout = ({ component }) => {
  return (
    <div className="documentation-layout">
      <h1>{component.title}</h1>
      <p>{component.titleDescription}</p>
      {component.sections.map((section, index) => (
        <DocumentationSection
          key={index}
          title={section.title}
          descriptionBefore={section.descriptionBefore}
          listItems={section.listItems}
          descriptionAfter={section.descriptionAfter}
        />
      ))}
      {/* preview component */}
    </div>
  );
};

export default DocumentationLayout;
