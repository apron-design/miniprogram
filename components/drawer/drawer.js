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
    placement: {
      type: String,
      value: 'right' // top | right | bottom | left
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
      value: 378
    },
    height: {
      type: [Number, String],
      value: 378
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
    isMobile: {
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
    isVisible: false,
    isAnimating: false,
    drawerStyle: '',
    useMobileLayout: false
  },
  observers: {
    'open': function(open) {
      if (open) {
        this.setData({ isVisible: true, isAnimating: true });
        setTimeout(() => {
          this.setData({ isAnimating: false });
        }, 50);
      } else {
        this.setData({ isAnimating: true });
        setTimeout(() => {
          this.setData({ isVisible: false, isAnimating: false });
        }, 300);
      }
    },
    'placement, width, height, isMobile': function() {
      this.updateDrawerStyle();
    }
  },
  attached() {
    this.updateDrawerStyle();
  },
  methods: {
    updateDrawerStyle() {
      const { placement, width, height, isMobile } = this.data;
      const isHorizontal = placement === 'left' || placement === 'right';
      const useMobileLayout = isMobile && (placement === 'top' || placement === 'bottom');
      
      let drawerStyle = '';
      if (isHorizontal) {
        const w = typeof width === 'number' ? `${width * 2}rpx` : width;
        drawerStyle = `width: ${w};`;
      } else {
        const h = typeof height === 'number' ? `${height * 2}rpx` : height;
        drawerStyle = `height: ${h};`;
      }
      
      this.setData({ drawerStyle, useMobileLayout });
    },
    handleOverlayClick() {
      if (this.data.closeByOverlay && this.data.closable) {
        this.handleClose();
      }
    },
    handleClose() {
      this.triggerEvent('close');
    },
    handleOk() {
      this.triggerEvent('ok');
    }
  }
});

