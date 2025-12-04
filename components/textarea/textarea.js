Component({
  properties: {
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    rows: {
      type: Number,
      value: 3
    },
    clearable: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    max: {
      type: Number,
      value: undefined
    },
    autoHeight: {
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
    isActive: false,
    currentLength: 0
  },
  observers: {
    'value': function(value) {
      const currentLength = String(value || '').length;
      const hasValue = currentLength > 0;
      const showClear = this.data.clearable && hasValue && !this.data.disabled;
      const showFooter = showClear || this.data.max !== undefined;
      this.setData({ 
        currentLength, 
        hasValue,
        showClear,
        showFooter,
        isActive: this.data.isActive || hasValue
      });
    }
  },
  data: {
    showClear: false,
    showFooter: false
  },
  methods: {
    handleInput(e) {
      const value = e.detail.value;
      this.setData({ currentLength: value.length });
      this.triggerEvent('input', e.detail);
    },
    handleFocus(e) {
      this.setData({ isActive: true });
      this.triggerEvent('focus', e.detail);
    },
    handleBlur(e) {
      this.setData({ isActive: false });
      this.triggerEvent('blur', e.detail);
    },
    handleClear() {
      this.setData({ value: '', currentLength: 0 });
      this.triggerEvent('clear');
      this.triggerEvent('input', { value: '' });
    }
  }
});

