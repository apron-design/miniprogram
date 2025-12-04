const message = require('../../../utils/message');

Page({
  onLoad() {
    setTimeout(() => {
      const messageComponent = this.selectComponent('#apron-message-container');
      if (messageComponent) {
        getApp().globalData.messageContainer = messageComponent;
      }
    }, 100);
  },
  showInfo() {
    message.info('这是一条信息提示');
  },
  showSuccess() {
    message.success('操作成功！');
  },
  showWarning() {
    message.warning('请注意！');
  },
  showError() {
    message.error('操作失败！');
  }
});

