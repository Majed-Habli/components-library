import React, { useState } from "react";
import CheckBox from "./checkbox";

const CheckBoxPreview = () => {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);

    return (
        <div className="preview-container">
            <div className="column-preview">
                <CheckBox
                    id="preview1"
                    name="preview1"
                    label="Option 1"
                    checked={checked1}
                    onChange={(e) => setChecked1(e.target.checked)}
                />
                <CheckBox
                    id="preview2"
                    name="preview2"
                    label="Option 2"
                    checked={checked2}
                    onChange={(e) => setChecked2(e.target.checked)}
                />
            </div>
        </div>
    );
};

export default CheckBoxPreview;