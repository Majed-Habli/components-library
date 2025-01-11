import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { componentMap,DocumentationContent } from "../../constants/strings";
import "./component-preview.scss";

const ComponentPreview = ({ id }) => {
    const componentData = componentMap[id];
    const docData = DocumentationContent.find((doc) => doc.id === id);
  
    if (!componentData) {
      return <p>Component not found!</p>;
    }
  
    const { component: Component, variants } = componentData;
  
    return (
      <div className="component-preview">
        <div className="preview">
          <p className="preview-title">Preview</p>
          <div className='component-container'>
            {variants.map(({ label, props }, index) => (
                <div key={index} className="variant">
                <Component {...props} />
                </div>
            ))}
          </div>
        </div>
  
        <div className="code-preview">
          <p className="code-type">HTML</p>
          {variants.map(({ label, props }, index) => (
            <div key={index} className="code-snippet">
              <SyntaxHighlighter language="jsx" style={materialLight}>
                {`<${Component.displayName || Component.name} ${Object.entries(props)
                  .map(([key, value]) => `${key}="${value}"`)
                  .join(' ')} />`}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ComponentPreview;