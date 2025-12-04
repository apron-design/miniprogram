Component({
  data: {
    messages: []
  },
  attached() {
    // 注册到全局
    getApp().globalData.messageContainer = this;
  }
});

