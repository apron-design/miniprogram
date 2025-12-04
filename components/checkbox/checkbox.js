Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    },
    defaultChecked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    indeterminate: {
      type: Boolean,
      value: false
    },
    value: {
      type: [String, Number],
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    labelClickable: {
      type: Boolean,
      value: false
    },
    customClass: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    }
  },
  data: {
    checkboxId: '',
    internalChecked: false
  },
  attached() {
    this.setData({
      checkboxId: `checkbox-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      internalChecked: this.data.defaultChecked
    });
  },
  observers: {
    'checked': function(checked) {
      if (checked !== undefined) {
        // 受控模式
      } else {
        // 非受控模式，使用内部状态
      }
    }
  },
  methods: {
    handleChange(e) {
      if (this.data.disabled) return;
      const checked = e.detail.value.length > 0;
      if (this.data.checked === undefined) {
        this.setData({ internalChecked: checked });
      }
      this.triggerEvent('change', { checked, event: e.detail });
    },
    handleLabelClick(e) {
      if (!this.data.labelClickable) {
        e.stopPropagation();
      }
    }
  }
});

