Component({
  properties: {
    // 按钮变体
    variant: {
      type: String,
      value: 'primary' // primary | secondary | default | text | link
    },
    // 按钮尺寸
    size: {
      type: String,
      value: 'md' // sm | md
    },
    // 是否为虚线边框
    dashed: {
      type: Boolean,
      value: false
    },
    // 是否为危险按钮
    danger: {
      type: Boolean,
      value: false
    },
    // 是否为加载状态
    loading: {
      type: Boolean,
      value: false
    },
    // 是否为块级按钮
    block: {
      type: Boolean,
      value: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 自定义类名
    customClass: {
      type: String,
      value: ''
    },
    // 自定义样式
    customStyle: {
      type: String,
      value: ''
    }
  },
  methods: {
    handleTap(e) {
      if (this.data.disabled || this.data.loading) {
        return;
      }
      this.triggerEvent('tap', e.detail);
    }
  }
});

