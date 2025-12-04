Page({
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: ''
  },
  handleInput1(e) {
    this.setData({ value1: e.detail.value });
  },
  handleInput2(e) {
    this.setData({ value2: e.detail.value });
  },
  handleInput3(e) {
    this.setData({ value3: e.detail.value });
  },
  handleInput4(e) {
    this.setData({ value4: e.detail.value });
  }
});

