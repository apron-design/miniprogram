Component({
  properties: {
    id: {
      type: String,
      value: 'apron-toast'
    }
  },
  data: {
    visible: false,
    isAnimating: false,
    text: '',
    type: 'success', // success | fail | danger | loading
    duration: 2000
  },
  lifetimes: {
    attached() {
      // 注册到全局
      const pages = getCurrentPages();
      if (pages.length > 0) {
        const currentPage = pages[pages.length - 1];
        currentPage.apronToast = this;
      }
    }
  },
  methods: {
    show(options) {
      const { text = '', type = 'success', duration = 2000 } = options;
      this.setData({
        visible: true,
        isAnimating: true,
        text,
        type,
        duration
      });
      
      // 动画完成后
      setTimeout(() => {
        this.setData({ isAnimating: false });
      }, 50);
      
      // 自动关闭（loading 类型默认不自动关闭）
      if (type !== 'loading' && duration > 0) {
        setTimeout(() => {
          this.close();
        }, duration);
      }
    },
    close() {
      this.setData({ isAnimating: true });
      setTimeout(() => {
        this.setData({
          visible: false,
          isAnimating: false
        });
      }, 300);
    }
  }
});

