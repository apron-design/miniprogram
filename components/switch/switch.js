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
    size: {
      type: String,
      value: 'default' // default | small | mini
    },
    variant: {
      type: String,
      value: 'default' // default | primary | secondary
    },
    checkedColor: {
      type: String,
      value: ''
    },
    uncheckedColor: {
      type: String,
      value: ''
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
    switchId: '',
    internalChecked: false
  },
  attached() {
    this.setData({
      switchId: `switch-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      internalChecked: this.data.defaultChecked
    });
  },
  methods: {
    handleChange(e) {
      if (this.data.disabled) return;
      const checked = e.detail.value.length > 0;
      if (this.data.checked === undefined) {
        this.setData({ internalChecked: checked });
      }
      this.triggerEvent('change', { checked, event: e.detail });
    }
  }
});

