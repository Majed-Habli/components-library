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
            <Button text="Discover" mode="solid" size="small" theme="green-700" />
            <Button text="Discover" mode="solid" size="medium" theme="green-700" />
            <Button text="Discover" mode="solid" size="large" theme="green-700" />
        </div>
    ),
    },
    {
      label:"Text-Icon button",
      icon: tib,
      description: "Jacob",
    },
    {
      label:"Checkbox",
      icon: Checkbox,
      description: "Jacob",
    },
  ];