Page({
  data: {
    modalVisible: false
  },
  showModal() {
    this.setData({ modalVisible: true });
  },
  handleClose() {
    this.setData({ modalVisible: false });
  },
  handleConfirm() {
    console.log('确认');
    this.setData({ modalVisible: false });
  },
  handleCancel() {
    console.log('取消');
    this.setData({ modalVisible: false });
  }
});

