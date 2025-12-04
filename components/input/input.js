Component({
  properties: {
    value: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'text'
    },
    placeholder: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      value: -1
    },
    error: {
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
  methods: {
    handleInput(e) {
      this.triggerEvent('input', e.detail);
    },
    handleFocus(e) {
      this.triggerEvent('focus', e.detail);
    },
    handleBlur(e) {
      this.triggerEvent('blur', e.detail);
    }
  }
});

