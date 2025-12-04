Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    showClose: {
      type: Boolean,
      value: true
    },
    showFooter: {
      type: Boolean,
      value: true
    },
    closeOnClickMask: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    handleClose() {
      this.setData({ visible: false });
      this.triggerEvent('close');
    },
    handleCancel() {
      this.triggerEvent('cancel');
    },
    handleConfirm() {
      this.triggerEvent('confirm');
    },
    handleMaskTap() {
      if (this.data.closeOnClickMask) {
        this.handleClose();
      }
    },
    stopPropagation() {
      // 阻止事件冒泡
    }
  }
});

