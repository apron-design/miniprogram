# Modal 对话框

模态对话框。

## 基础用法

```xml
<apron-modal
  visible="{{modalVisible}}"
  title="提示"
  bindclose="handleClose"
  bindconfirm="handleConfirm"
  bindcancel="handleCancel"
>
  <view>这是一个模态对话框</view>
</apron-modal>
```

```javascript
Page({
  data: {
    modalVisible: false
  },
  showModal() {
    this.setData({ modalVisible: true });
  },
  handleClose() {
    this.setData({ modalVisible: false });
  },
  handleConfirm() {
    console.log('确认');
    this.setData({ modalVisible: false });
  },
  handleCancel() {
    console.log('取消');
    this.setData({ modalVisible: false });
  }
});
```

## 自定义底部按钮

```xml
<apron-modal visible="{{modalVisible}}" title="提示" show-footer="{{false}}">
  <view>这是一个模态对话框</view>
  <view slot="footer">
    <apron-button variant="primary" bindtap="handleConfirm">确定</apron-button>
  </view>
</apron-modal>
```

## API

### Properties

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| visible | 是否显示 | `Boolean` | `false` |
| title | 标题 | `String` | `''` |
| showClose | 是否显示关闭按钮 | `Boolean` | `true` |
| showFooter | 是否显示底部按钮 | `Boolean` | `true` |
| closeOnClickMask | 点击遮罩是否关闭 | `Boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| close | 关闭事件 | - |
| confirm | 确认事件 | - |
| cancel | 取消事件 | - |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 对话框内容 |
| footer | 自定义底部按钮 |

