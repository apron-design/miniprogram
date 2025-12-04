Component({
  properties: {
    url: {
      type: String,
      value: ''
    },
    variant: {
      type: String,
      value: 'secondary' // primary | secondary
    },
    underline: {
      type: String,
      value: 'never' // always | hover | never
    },
    danger: {
      type: Boolean,
      value: false
    },
    disabled: {
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
  methods: {
    handleTap(e) {
      if (!this.data.disabled) {
        this.triggerEvent('tap', e.detail);
      }
    }
  }
});

