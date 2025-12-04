const message = require('../../utils/message');

Page({
  onLoad() {
    // 初始化 message 容器
    setTimeout(() => {
      const messageComponent = this.selectComponent('#apron-message-container');
      if (messageComponent) {
        getApp().globalData.messageContainer = messageComponent;
      }
    }, 100);
  }
});

