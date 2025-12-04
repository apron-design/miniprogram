# Input 输入框

通过鼠标或键盘输入内容。

## 基础用法

```xml
<apron-input placeholder="请输入内容" value="{{value}}" bindinput="handleInput" />
```

## 带标签

```xml
<apron-input label="用户名" placeholder="请输入用户名" value="{{value}}" bindinput="handleInput" />
```

## 禁用状态

```xml
<apron-input label="禁用状态" value="禁用内容" disabled="{{true}}" />
```

## 错误提示

```xml
<apron-input label="错误提示" value="{{value}}" error="请输入正确的内容" bindinput="handleInput" />
```

## API

### Properties

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value | 输入框的值 | `String` | `''` |
| type | 输入框类型 | `String` | `text` |
| placeholder | 输入框占位符 | `String` | `''` |
| label | 标签文本 | `String` | `''` |
| disabled | 是否禁用 | `Boolean` | `false` |
| maxlength | 最大输入长度 | `Number` | `-1` |
| error | 错误提示文本 | `String` | `''` |
| customClass | 自定义类名 | `String` | `''` |
| customStyle | 自定义样式 | `String` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入事件 | `event.detail` |
| focus | 聚焦事件 | `event.detail` |
| blur | 失焦事件 | `event.detail` |

