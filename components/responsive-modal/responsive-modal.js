Component({
  properties: {
    open: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    closable: {
      type: Boolean,
      value: true
    },
    closeByOverlay: {
      type: Boolean,
      value: true
    },
    width: {
      type: [Number, String],
      value: 520
    },
    height: {
      type: [Number, String],
      value: 378
    },
    footer: {
      type: String,
      value: undefined
    },
    showFooter: {
      type: Boolean,
      value: true
    },
    okText: {
      type: String,
      value: '确定'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    breakpoint: {
      type: Number,
      value: 768
    },
    drawerPlacement: {
      type: String,
      value: 'bottom' // top | right | bottom | left
    },
    centered: {
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
    useModal: true,
    windowWidth: 375
  },
  lifetimes: {
    attached() {
      const systemInfo = wx.getSystemInfoSync();
      this.setData({
        windowWidth: systemInfo.windowWidth,
        useModal: systemInfo.windowWidth >= this.data.breakpoint
      });
    }
  },
  methods: {
    handleClose() {
      this.triggerEvent('close');
    },
    handleOk() {
      this.triggerEvent('ok');
    }
  }
});

