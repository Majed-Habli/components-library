# CheckBox Component Documentation

The `CheckBox` component has eight props: `size`, `id`, `name`, `label`, `checked`, `aria-checked`, `onChange`, and `theme`.

### Props Overview

- **`size`**: Determines the CheckBox's dimensions. Options:
  - `small`.
  - `medium`.
  - `large`.

- **`name`**: The checkbox's name.

- **`label`**: The checkbox label.

- **`checked`**: The checbox state.

- **`id`**: Defines the checkbox's id, linking it to the lable.

- **`aria-checked`**: Sets the state of the component for screen readers.

- **`onChange`**: Sets the state of the component when it updates.

- **`theme`**: The color scheme of the CheckBox, affecting background and border.

### Example Usage

```jsx
import CheckBox from './Button';

const [checked, setChecked] = useState(true);

// Outlined Large button
<CheckBox
    id="preview2"
    name="preview2"
    label="Checkbox"
    size="medium"
    theme="blue-500"
    checked={checked}
    aria-checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
/>


| **Prop**       | **Option**           | **Description**                                                                                              |
|----------------|----------------------|--------------------------------------------------------------------------------------------------------------|
| `size`         | `small`              | Padding `5px 15px`, font size `13px`.                                                                        |
|                | `medium`             | Padding `7px 17px`, font size `14px`.                                                                        |
|                | `large`              | Padding `9px 19px`, font size `16px`.                                                                        |
| `id`           | `string`             | Required, Unique identifier for the checkbox, used to associate it with its label.                           |
| `name`         | `string`             | Optional, Name of the checkbox, useful for form submissions.                                                 |
| `label`        | `string`             | Optional, The CheckBox label text.                                                                           |
| `checked`      | `boolean`            | Required, Determines whether the checkbox is selected (`true`) or not (`false`).                             |
| `aria-checked` | `boolean`            | Matches `checked`, Accessibility attribute indicating the current state of the checkbox.                     |
| `onChange`     | `function`           | Required, Callback function triggered when the checkbox state changes. Receives the event as an argument.    |
| `theme`        | `string`             | The custom color scheme of the checkbox, affecting the border, background, and hover styles.                 |
