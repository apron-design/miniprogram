Component({
  properties: {
    name: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    required: {
      type: Boolean,
      value: false
    },
    floatingLabel: {
      type: Boolean,
      value: undefined
    },
    help: {
      type: String,
      value: ''
    },
    extra: {
      type: String,
      value: ''
    },
    noLabel: {
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
    itemId: '',
    isFocused: false,
    hasValue: false,
    error: '',
    isRequired: false,
    layout: 'vertical',
    floatingLabel: false,
    labelWidth: undefined,
    labelAlign: 'left',
    disabled: false,
    labelStyle: '',
    parent: null
  },
  attached() {
    this.setData({
      itemId: `form-item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    });
  },
  methods: {
    setParent(parent) {
      this.setData({
        parent,
        layout: parent.data.layout,
        floatingLabel: this.data.floatingLabel !== undefined ? this.data.floatingLabel : parent.data.floatingLabel,
        labelWidth: this.data.labelWidth || parent.data.labelWidth,
        labelAlign: parent.data.labelAlign,
        disabled: parent.data.disabled
      });
      this.updateLabelStyle();
      this.updateValue();
    },
    updateLabelStyle() {
      const { labelWidth, layout, labelAlign } = this.data;
      let labelStyle = '';
      if (labelWidth && layout === 'horizontal') {
        const w = typeof labelWidth === 'number' ? `${labelWidth * 2}rpx` : labelWidth;
        labelStyle = `width: ${w}; text-align: ${labelAlign};`;
      }
      this.setData({ labelStyle });
    },
    updateValue() {
      if (!this.data.parent || !this.data.name) return;
      const value = this.data.parent.getFieldValue(this.data.name);
      const error = this.data.parent.getFieldError(this.data.name);
      const hasValue = value !== undefined && value !== null && value !== '';
      this.setData({ hasValue, error });
    },
    handleFocus() {
      this.setData({ isFocused: true });
    },
    handleBlur() {
      this.setData({ isFocused: false });
      if (this.data.parent && this.data.name) {
        this.data.parent.setFieldTouched(this.data.name, true);
      }
    },
    handleChange(value) {
      if (this.data.parent && this.data.name) {
        this.data.parent.setFieldValue(this.data.name, value);
        this.data.parent.setFieldTouched(this.data.name, true);
        this.updateValue();
      }
    }
  },
  observers: {
    'name': function() {
      this.updateValue();
    }
  }
});

