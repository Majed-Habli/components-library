# IconButton Component Documentation

The `IconButton` component has four props: `size`, `mode`, `text`, `theme`, and `href`.

### Props Overview

- **`size`**: Determines the button's dimensions. Options:
  - `small`: Padding `10px`, icon size `15.6px`.
  - `medium`: Padding `11.6px`, icon size `17.6px`.
  - `large`: Padding `13.2px`, icon size `23.2px`.

- **`mode`**: Defines the button's style variant. Options:
  - `outlined`: Border only, no background color.
  - `solid`: Background color with a contrasting text color.
  - `text`: No border or background color.

- **`iconName`**: The Icon label.

- **`theme`**: The color scheme of the button, affecting background, font color, and border (if applicable).

### Example Usage

```jsx
import IconButton from './icon-button';

// Outlined Large IconButton
<IconButton iconName="DevicePhoneMobileIcon" size="large"  mode="outlined" theme="blue-300"/>

// Solid Medium IconButton
<IconButton iconName="DevicePhoneMobileIcon" size="medium"  mode="solid" theme="blue-300"/>

// Text Small IconButton
<IconButton iconName="DevicePhoneMobileIcon" size="small"  mode="text" theme="blue-300"/>

| **Prop**     | **Option**           | **Description**                                    |
|------------- |----------------------|----------------------------------------------------|
| `mode`       | `outlined`           | No background color, border color applies.         |
|              | `solid`              | Background color applies.                          |
|              | `text`               | No border or background color.                     |
| `size`       | `small`              | Padding `5px 15px`, font size `13px`.              |
|              | `medium`             | Padding `7px 17px`, font size `14px`.              |
|              | `large`              | Padding `9px 19px`, font size `16px`.              |
| `iconName`   | `name`               | The Icon label.                                    |
| `ariaLabel`  | *string*             | Used for explaining the button use case.           |
| `disabled`   | `true` or *empty*    | Optional use for explaining the button use case.   |
