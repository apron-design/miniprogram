Component({
  properties: {
    variant: {
      type: String,
      value: 'default' // primary | default
    },
    closable: {
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
    handleClose(e) {
      this.triggerEvent('close', e.detail);
    }
  }
});

