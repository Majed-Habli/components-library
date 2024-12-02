import ButtonImage from "assets/Button.svg";
import Checkbox from "assets/Checkbox-icon.svg";
import tib from "assets/text-Icon-Button.svg";
import Button from "../components/button/button";

export const WidgetsMetaData = [
    {
      label:"Button",
      icon: ButtonImage,
      description: "Use buttons to allow users to take action within your site or app.",
      preview: (
        <div className="preview-container">
            <Button text="Button" mode="solid" size="small" theme="blue-400" />
            <Button text="Button" mode="solid" size="medium" theme="blue-400" />
            <Button text="Button" mode="solid" size="large" theme="blue-400" />
        </div>
    ),
    },
    {
      label:"Text-Icon button",
      icon: tib,
      description: "Combine text and icons for clearer actions.",
    },
    {
      label:"Checkbox",
      icon: Checkbox,
      description: "let users choose from multiple actions or options.",
    },
  ];