import React from "react";
// import "./documentation-layout.scss";

const DocumentationLayout = ({ component }) => {
  return (
    <div className="documentation-layout">
      <h1>{component.label}</h1>
      <p>{component.description}</p>
      <div className="preview">
        <h2>Component Preview</h2>
        {component.preview}
      </div>
      <div className="code-preview">
        <h2>Code Example</h2>
        <pre>{component.code}</pre>
      </div>
    </div>
  );
};

export default DocumentationLayout;
