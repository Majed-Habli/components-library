# Button Component Documentation

The `Button` component has four props: `size`, `mode`, `text`, and `theme`.

### Props Overview

- **`size`**: Determines the button's dimensions. Options:
  - `small`: Padding `5px 15px`, font size `13px`.
  - `medium`: Padding `7px 17px`, font size `14px`.
  - `large`: Padding `9px 19px`, font size `16px`.

- **`mode`**: Defines the button's style variant. Options:
  - `outlined`: Border only, no background color.
  - `solid`: Background color with a contrasting text color.
  - `text`: No border or background color.

- **`text`**: The button label.

- **`theme`**: The color scheme of the button, affecting background, font color, and border (if applicable).

### Example Usage

```jsx
import Button from './Button';

// Outlined Large button
<Button text="Discover" mode="outlined" size="large" theme="green-700" />

// Solid Medium button
<Button text="Discover" mode="solid" size="medium" theme="blue-300" />

// Text Small button
<Button text="Discover" mode="text" size="small" theme="blue-300" />


| **Prop** | **Option**  | **Description**                              |
|----------|-------------|----------------------------------------------|
| `mode`   | `outlined`  | No background color, border color applies.   |
|          | `solid`     | Background color applies.                    |
|          | `text`      | No border or background color.               |
| `size`   | `small`     | Padding `5px 15px`, font size `13px`.        |
|          | `medium`    | Padding `7px 17px`, font size `14px`.        |
|          | `large`     | Padding `9px 19px`, font size `16px`.        |
