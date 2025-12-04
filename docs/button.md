# Button 按钮

按钮用于触发一个操作。

## 基础用法

```xml
<apron-button variant="primary">Primary</apron-button>
<apron-button variant="secondary">Secondary</apron-button>
<apron-button variant="default">Default</apron-button>
<apron-button variant="text">Text</apron-button>
<apron-button variant="link">Link</apron-button>
```

## 尺寸

通过 `size` 属性设置按钮尺寸。

```xml
<apron-button variant="primary" size="sm">Small</apron-button>
<apron-button variant="primary" size="md">Medium</apron-button>
```

## 状态

### 加载状态

通过 `loading` 属性设置按钮为加载状态。

```xml
<apron-button variant="primary" loading="{{true}}">Loading</apron-button>
```

### 禁用状态

通过 `disabled` 属性设置按钮为禁用状态。

```xml
<apron-button variant="primary" disabled="{{true}}">Disabled</apron-button>
```

### 危险按钮

通过 `danger` 属性设置按钮为危险按钮。

```xml
<apron-button variant="primary" danger="{{true}}">Danger</apron-button>
```

## 块级按钮

通过 `block` 属性设置按钮为块级按钮，宽度为 100%。

```xml
<apron-button variant="primary" block="{{true}}">Block Button</apron-button>
```

## API

### Properties

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 按钮变体 | `primary` \| `secondary` \| `default` \| `text` \| `link` | `primary` |
| size | 按钮尺寸 | `sm` \| `md` | `md` |
| dashed | 是否为虚线边框 | `Boolean` | `false` |
| danger | 是否为危险按钮 | `Boolean` | `false` |
| loading | 是否为加载状态 | `Boolean` | `false` |
| block | 是否为块级按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| customClass | 自定义类名 | `String` | `''` |
| customStyle | 自定义样式 | `String` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| tap | 点击事件 | `event.detail` |

