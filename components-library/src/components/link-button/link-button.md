# LinkButton Component Documentation

The `LinkButton` component has four props: `size`, `mode`, `text`, `theme`, and `href`.

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

- **`href`**: The url/link you want the button to redirect you to.

### Example Usage

```jsx
import LinkButton from './link-button';

// Outlined Large LinkButton
<LinkButton text="Discover Components" mode="outlined" size="large" theme="blue-300" href="link"/>

// Solid Medium LinkButton
<LinkButton text="Discover Components" mode="solid" size="medium" theme="blue-300" href="link"/>

// Text Small LinkButton
<LinkButton text="Discover Components" mode="text" size="small" theme="blue-300" href="link"/>


| **Prop**     | **Option**          | **Description**                                    |
|--------------|-------------|------------------------------------------------------------|
| `mode`       | `outlined`          | No background color, border color applies.         |
|              | `solid`             | Background color applies.                          |
|              | `text`              | No border or background color.                     |
| `size`       | `small`             | Padding `5px 15px`, font size `13px`.              |
|              | `medium`            | Padding `7px 17px`, font size `14px`.              |
|              | `large`             | Padding `9px 19px`, font size `16px`.              |
| `ariaLabel`  | *string*            | Used for explaining the button use case.           |
| `disabled`   | `true` or *empty*   | Optional use for explaining the button use case.   |