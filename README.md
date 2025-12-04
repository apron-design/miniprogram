# Apron Design WeChat MiniProgram Component Library

Apron Design WeChat MiniProgram Component Library, ported from the React version of Apron Design component library.

## DEMO WeChat MiniProgram
![DEMO](./assets/gh_a909923ee0d8_430.jpg)

## Features

- 🎨 Rich component library (37+ components)
- 📱 Native WeChat MiniProgram support
- 🎯 Friendly API design
- 📖 Comprehensive documentation
- 🎭 Unified visual style

## Installation

Copy the `components` directory to your MiniProgram project, then configure it in `app.json`:

```json
{
  "usingComponents": {
    "apron-button": "/components/button/button",
    "apron-alert": "/components/alert/alert",
    "apron-message": "/components/message/message",
    "apron-input": "/components/input/input",
    "apron-modal": "/components/modal/modal"
  }
}
```

## Quick Start

### Using Button Component

```xml
<apron-button variant="primary" bindtap="handleTap">Click Me</apron-button>
```

### Using Message Component

First, add the following to your page's wxml:

```xml
<apron-message id="apron-message-container"></apron-message>
```

Then in your page's js:

```javascript
const message = require('../../utils/message');

Page({
  onLoad() {
    setTimeout(() => {
      const messageComponent = this.selectComponent('#apron-message-container');
      if (messageComponent) {
        getApp().globalData.messageContainer = messageComponent;
      }
    }, 100);
  },
  showMessage() {
    message.success('Operation successful!');
  }
});
```

## Component List

### Basic Components
- [Button](./docs/button.md) - Button component
- [Avatar](./docs/avatar.md) - User avatar display
- [Badge](./docs/badge.md) - Badge with dot, number or text in the top-right corner
- [Card](./docs/card.md) - Universal card container
- [Divider](./docs/divider.md) - Divider for separating content
- [Empty](./docs/empty.md) - Empty state placeholder
- [Image](./docs/image.md) - Image display component
- [Link](./docs/link.md) - Hyperlink component
- [Space](./docs/space.md) - Set spacing between components
- [Tag](./docs/tag.md) - Tag for marking and selection

### Feedback Components
- [Alert](./docs/alert.md) - Alert component
- [Message](./docs/message.md) - Global message component
- [Modal](./docs/modal.md) - Modal dialog component
- [Drawer](./docs/drawer.md) - Drawer panel sliding from screen edge
- [Spin](./docs/spin.md) - Loading spinner for pages and blocks
- [Skeleton](./docs/skeleton.md) - Skeleton screen for loading states
- [Toast](./docs/toast.md) - Lightweight feedback/toast
- [Popover](./docs/popover.md) - Popover card that appears on click/hover
- [Tooltip](./docs/tooltip.md) - Simple text tooltip bubble

### Form Components
- [Input](./docs/input.md) - Input component
- [Textarea](./docs/textarea.md) - Multi-line text input
- [InputOtp](./docs/input-otp.md) - One-time password input
- [Checkbox](./docs/checkbox.md) - Checkbox component
- [Radio](./docs/radio.md) - Radio button component
- [Select](./docs/select.md) - Dropdown selector
- [Switch](./docs/switch.md) - Switch selector
- [DatePicker](./docs/date-picker.md) - Date picker
- [Cascader](./docs/cascader.md) - Cascader selector
- [Rate](./docs/rate.md) - Rating component
- [Form](./docs/form.md) - Form component

### Layout Components
- [Grid](./docs/grid.md) - 24-column grid system
- [Collapse](./docs/collapse.md) - Collapsible content area
- [Tabs](./docs/tabs.md) - Tab switching component
- [Steps](./docs/steps.md) - Step indicator for guiding users through a process
- [Timeline](./docs/timeline.md) - Vertical timeline for displaying time-based information

### Other Components
- [Pagination](./docs/pagination.md) - Pagination for long lists
- [ResponsiveModal](./docs/responsive-modal.md) - Responsive modal that automatically switches between Modal/Drawer based on screen size

## Development

This project includes a complete demo MiniProgram that can be opened directly in WeChat Developer Tools for preview.

### Running the Demo

1. Open the `miniprogram` directory in WeChat Developer Tools
2. Configure AppID: `wx23532ffebd20e997`
3. Compile and run

## Design Guidelines

The component library follows Apron Design guidelines and uses unified design tokens.

### Colors

- Primary: `#393939`
- Secondary: `#4C9EEA`
- Success: `#22c55e`
- Warning: `#f59e0b`
- Error: `#ef4444`

### Spacing

Spacing system based on 4px unit: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

### Border Radius

- sm: 4rpx
- md: 6rpx
- lg: 8rpx
- xl: 12rpx
- 2xl: 16rpx

## Contributing

Issues and Pull Requests are welcome.

## License

MIT
