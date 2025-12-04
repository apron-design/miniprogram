# Alert 警告提示

用于页面中展示重要的提示信息。

## 基础用法

```xml
<apron-alert type="info">这是一条信息提示</apron-alert>
<apron-alert type="success">这是一条成功提示</apron-alert>
<apron-alert type="warning">这是一条警告提示</apron-alert>
<apron-alert type="error">这是一条错误提示</apron-alert>
```

## API

### Properties

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 提示类型 | `info` \| `success` \| `warning` \| `error` | `info` |
| customClass | 自定义类名 | `String` | `''` |
| customStyle | 自定义样式 | `String` | `''` |

