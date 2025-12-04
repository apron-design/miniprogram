Component({
  properties: {
    dashed: {
      type: Boolean,
      value: false
    },
    align: {
      type: String,
      value: 'left' // left | center | right
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
    hasText: false
  },
  attached() {
    // 检查是否有插槽内容
    const query = this.createSelectorQuery();
    query.select('.apron-divider__text').boundingClientRect((rect) => {
      if (rect && rect.height > 0) {
        this.setData({ hasText: true });
      }
    }).exec();
  }
});

