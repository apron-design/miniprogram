# Apron Design MiniProgram

Apron Design 微信小程序组件库，基于 React 版本的 Apron Design 组件库移植而来。

## 特性

- 🎨 丰富的组件库
- 📱 微信小程序原生支持
- 🎯 TypeScript 友好的 API 设计
- 📖 完善的文档
- 🎭 统一的视觉风格

## 安装

将 `components` 目录复制到你的小程序项目中，然后在 `app.json` 中配置：

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

## 快速开始

### 使用 Button 组件

```xml
<apron-button variant="primary" bindtap="handleTap">Click Me</apron-button>
```

### 使用 Message 组件

首先在页面的 wxml 中添加：

```xml
<apron-message id="apron-message-container"></apron-message>
```

然后在页面的 js 中：

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
    message.success('操作成功！');
  }
});
```

## 组件列表

- [Button 按钮](./docs/button.md)
- [Alert 警告提示](./docs/alert.md)
- [Message 全局提示](./docs/message.md)
- [Input 输入框](./docs/input.md)
- [Modal 对话框](./docs/modal.md)

## 开发

本项目包含一个完整的 demo 小程序，可以直接在微信开发者工具中打开 `miniprogram` 目录进行预览。

### 运行 Demo

1. 使用微信开发者工具打开 `miniprogram` 目录
2. 配置 AppID: `wx23532ffebd20e997`
3. 编译运行

## 设计规范

组件库遵循 Apron Design 设计规范，使用统一的设计令牌（Design Tokens）。

### 颜色

- Primary: `#393939`
- Secondary: `#4C9EEA`
- Success: `#22c55e`
- Warning: `#f59e0b`
- Error: `#ef4444`

### 间距

使用 4px 基础单位的间距系统：4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

### 圆角

- sm: 4rpx
- md: 6rpx
- lg: 8rpx
- xl: 12rpx
- 2xl: 16rpx

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

MIT

