# Message 全局提示

全局展示操作反馈信息。

## 基础用法

```javascript
const message = require('../../utils/message');

// 信息提示
message.info('这是一条信息提示');

// 成功提示
message.success('操作成功！');

// 警告提示
message.warning('请注意！');

// 错误提示
message.error('操作失败！');
```

## 自定义时长

```javascript
// 2秒后自动关闭
message.info('2秒后关闭', 2000);

// 不自动关闭
message.info('不自动关闭', 0);
```

## 移除消息

```javascript
// 移除指定消息
const id = message.info('这条消息可以手动移除', 0);
message.remove(id);

// 清除所有消息
message.clear();
```

## 在页面中使用

首先在页面的 wxml 中添加 message 组件：

```xml
<apron-message id="apron-message-container"></apron-message>
```

然后在页面的 js 中初始化：

```javascript
Page({
  onLoad() {
    setTimeout(() => {
      const messageComponent = this.selectComponent('#apron-message-container');
      if (messageComponent) {
        getApp().globalData.messageContainer = messageComponent;
      }
    }, 100);
  }
});
```

## API

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
|--------|------|------|--------|
| show | 显示消息 | `(type, content, duration?)` | `string` (消息ID) |
| info | 显示信息提示 | `(content, duration?)` | `string` (消息ID) |
| success | 显示成功提示 | `(content, duration?)` | `string` (消息ID) |
| warning | 显示警告提示 | `(content, duration?)` | `string` (消息ID) |
| error | 显示错误提示 | `(content, duration?)` | `string` (消息ID) |
| remove | 移除指定消息 | `(id)` | - |
| clear | 清除所有消息 | - | - |

