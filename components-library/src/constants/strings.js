import ButtonImage from "assets/Button.svg";
import Checkbox from "assets/Checkbox-icon.svg";
import tib from "assets/text-Icon-Button.svg";
import Button from "../components/button/button";
import Accordion from "assets/Accordon.svg";
import TextIconButton from "../components/text-icon-button/text-icon-button";
import CheckBoxPreview from "components/checkbox/checkbox-preview";
import AccordionComponent from "components/accordion/accordion";

export const WidgetsMetaData = [
    {
      id: "BTN-001",
      label:"Button",
      icon: ButtonImage,
      description: "Use buttons to allow users to take action within your site or app.",
      preview: (
        <div className="preview-container">
          <div className="row-preview">
            <Button text="Button" mode="solid" size="small" theme="blue-400" />
            <Button text="Button" mode="solid" size="medium" theme="blue-400" />
            <Button text="Button" mode="solid" size="large" theme="blue-400" />
          </div>
        </div>
      ),
    },
    {
      id: "TIB-001",
      label:"Text-Icon button",
      icon: tib,
      description: "Combine text and icons for clearer actions.",
      preview: (
        <div className="preview-container">
          <div className="column-preview">
            <TextIconButton leadingIcon="ArrowDownTrayIcon" text="Download" size="medium"  mode="solid" theme="blue-400"/>
            <TextIconButton trailingIcon="ArrowDownTrayIcon" text="Download" size="medium"  mode="solid" theme="blue-400"/>
          </div>
        </div>
      ),
    },
    {
      id: "CHK-001",
      label:"Checkbox",
      icon: Checkbox,
      description: "let users choose from multiple actions or options.",
      preview: (
        <CheckBoxPreview />
      ),
    },
    {
      id: "ACC-001",
      label:"Accordion",
      icon: Accordion,
      description: "Use accordions to toggle content visibility in sections.",
      preview: (
        <div className="preview-container">
          <div className="row-preview">
            <AccordionComponent trailingIcon="ChevronDownIcon" title="Statment" content="Neque porro quisquam est qui dolorem ipsum quia"/>
          </div>
        </div>
      ),
    },
  ];

  //Documentation strings for the components
  export const DocumentationContent = [
    {
      id: "BTN-001",
      title: "Button Component",
      titleDescription: "Buttons play a vital role in our everyday digital experiences, allowing us to interact, make choices, and navigate effortlessly. They’re the little heroes that help us complete tasks and find our way through applications.",
      sections: [
        {
          title: "Button Modes Overview",
          descriptionBefore: "Our button components are designed to offer flexibility and cater to different interaction needs within your UI. Here’s an overview of the button modes available:",
          listItems: [
            "Solid Buttons: Visually prominent with a filled background, suited for primary actions.",
            "Outlined Buttons: Defined by a bordered style, ideal for secondary actions.",
            "Text Buttons: Minimalistic buttons that show only text, great for low-priority actions.",
          ],
          descriptionAfter: "Each type is designed with consistent sizing, theming, and accessibility in mind, helping to create a cohesive user experience across your project.",
        },
      ],
    },
    {
      id: "TIB-001",
      content: "This is the documentation for the text icon button component...",
    },
    {
      id: "CHK-001",
      content: "This is the documentation for the Checkbox component...",
    },
  ];
  
  export const componentMap = {
    "BTN-001": {
      component: Button,
      variants: [
        { label: 'Solid', props: { mode: 'solid', text: 'Solid Button', theme: 'blue-400',size: "medium" } },
        { label: 'Outlined', props: { mode: 'outlined', text: 'Outlined Button', theme: 'blue-400',size: "medium" } },
        { label: 'Text', props: { mode: 'text', text: 'Text Button', theme: 'blue-400',size: "medium" } },
      ],
    },
    "CHK-001": {
      component: Checkbox,
      variants: [
        { label: 'Checked', props: { checked: true } },
        { label: 'Unchecked', props: { checked: false } },
      ],
    },
  };
  