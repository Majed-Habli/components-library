import "./components.scss";
import React, { useState } from "react";
import Sidebar from "components/navigation/sidebar";
import { DocumentationContent } from "../../constants/strings";
import DocumentationLayout from "components/documentation-layout/documentation-layout";

const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const selectedDocumentation = DocumentationContent.find(
    (doc) => doc.id === selectedComponent
  );
  console.log(selectedDocumentation)

  return (
    <div className="page-container">
      <Sidebar onSelectComponent={setSelectedComponent} />
      <div className="documentation-container">
        {selectedDocumentation ? (
          <DocumentationLayout component={selectedDocumentation} />
        ) : (
          <p>Please select a component to view its documentation.</p>
        )}
      </div>
    </div>
  );
};

export default Components;
