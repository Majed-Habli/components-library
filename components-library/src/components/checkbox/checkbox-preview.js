import React, { useState } from "react";
import CheckBox from "./checkbox";

const CheckBoxPreview = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div className="preview-container">
            <div className="column-preview">
                <CheckBox
                    id="preview2"
                    name="preview2"
                    label="Checkbox"
                    size="medium"
                    theme="blue-500"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
            </div>
        </div>
    );
};

export default CheckBoxPreview;