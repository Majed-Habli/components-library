import React from "react";
import DocumentationSection from "./documentation-section";
import "./documentation-layout.scss";
import ComponentPreview from "components/component-preview/component-preview";

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
      <ComponentPreview id={component.id}/>
    </div>
  );
};

export default DocumentationLayout;
