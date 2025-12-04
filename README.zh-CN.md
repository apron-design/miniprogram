# Apron Design 微信小程序组件库

Apron Design 微信小程序组件库，基于 React 版本的 Apron Design 组件库移植而来。

## DEMO 微信小程序
![DEMO](./assets/gh_a909923ee0d8_430.jpg)

## 特性

- 🎨 丰富的组件库（37+ 组件）
- 📱 微信小程序原生支持
- 🎯 友好的 API 设计
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
<apron-button variant="primary" bindtap="handleTap">点击我</apron-button>
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

### 基础组件
- [Button 按钮](./docs/button.md) - 按钮组件
- [Avatar 头像](./docs/avatar.md) - 用户头像展示
- [Badge 徽标](./docs/badge.md) - 图标右上角的红点、数字或者文字
- [Card 卡片](./docs/card.md) - 通用卡片容器
- [Divider 分割线](./docs/divider.md) - 区隔内容的分割线
- [Empty 空状态](./docs/empty.md) - 空状态时的展示占位图
- [Image 图片](./docs/image.md) - 图片展示组件
- [Link 链接](./docs/link.md) - 超链接组件
- [Space 间距](./docs/space.md) - 设置组件之间的间距
- [Tag 标签](./docs/tag.md) - 用于标记和选择

### 反馈组件
- [Alert 警告提示](./docs/alert.md) - 警告提示组件
- [Message 全局提示](./docs/message.md) - 全局提示组件
- [Modal 对话框](./docs/modal.md) - 对话框组件
- [Drawer 抽屉](./docs/drawer.md) - 屏幕边缘滑出的浮层面板
- [Spin 加载中](./docs/spin.md) - 用于页面和区块的加载中状态
- [Skeleton 骨架屏](./docs/skeleton.md) - 在需要等待加载内容的位置设置一个骨架屏
- [Toast 轻提示](./docs/toast.md) - 轻量级反馈/提示
- [Popover 气泡卡片](./docs/popover.md) - 点击/鼠标移入元素，弹出气泡式的卡片浮层
- [Tooltip 文字提示](./docs/tooltip.md) - 简单的文字提示气泡框

### 表单组件
- [Input 输入框](./docs/input.md) - 输入框组件
- [Textarea 文本域](./docs/textarea.md) - 多行文本输入框
- [InputOtp 验证码输入](./docs/input-otp.md) - 一次性密码输入框
- [Checkbox 复选框](./docs/checkbox.md) - 多选框组件
- [Radio 单选框](./docs/radio.md) - 单选框组件
- [Select 选择器](./docs/select.md) - 下拉选择器
- [Switch 开关](./docs/switch.md) - 开关选择器
- [DatePicker 日期选择](./docs/date-picker.md) - 日期选择器
- [Cascader 级联选择](./docs/cascader.md) - 级联选择器
- [Rate 评分](./docs/rate.md) - 评分组件
- [Form 表单](./docs/form.md) - 表单组件

### 布局组件
- [Grid 栅格](./docs/grid.md) - 24 栅格系统
- [Collapse 折叠面板](./docs/collapse.md) - 可以折叠/展开的内容区域
- [Tabs 标签页](./docs/tabs.md) - 选项卡切换组件
- [Steps 步骤条](./docs/steps.md) - 引导用户按照流程完成任务
- [Timeline 时间轴](./docs/timeline.md) - 垂直展示的时间流信息

### 其他组件
- [Pagination 分页](./docs/pagination.md) - 采用分页的形式分隔长列表
- [ResponsiveModal 响应式对话框](./docs/responsive-modal.md) - 根据屏幕尺寸自动切换 Modal/Drawer

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
