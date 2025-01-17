# Accordion Component Documentation

The `Accordion` component has four props: `index`, `trailingIcon`, `leadingIcon`, `title`, `content` and `theme`.

### Props Overview

- **`index`**: Index of the accordion incase you have multiple.

- **`trailingIcon`**: The Icon after the Accordion Title ( ArrowDown ).

- **`leadingIcon`**: The Icon before the Accordion Title.

- **`theme`**: The color scheme of the button, affecting background, font color, and border (if applicable).

- **`title`**: The title of the Accordion.

- **`Content`**: The content of the Accordion component ( text, component ).

### Example Usage

```jsx
import Accordion from './Accordion';

<Accordion trailingIcon="ChevronDownIcon" title="Statment" content="Neque porro quisquam est qui dolorem ipsum quia" theme="blue-400"/>


| **Prop**       | **Option**               | **Description**                                     |
|----------------|--------------------------|-----------------------------------------------------|
| `index`        | `loop index`             | Assigns unique ids to the components.               |
| `theme`        | `color key`              | The color you want to assign the accordion.         |
| `title`        | *string*                 | The title of the accordion.                         |
| `content`      | *string* or *component*  | Content of the accordion component.                 |
| `leadingIcon`  | *icon name*              | Icon before the title.                              |
| `trailingIcon` | *icon name*              | Icon after the title.                               |
