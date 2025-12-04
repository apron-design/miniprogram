Component({
  properties: {
    align: {
      type: String,
      value: '' // start | end | center | baseline
    },
    orientation: {
      type: String,
      value: 'horizontal' // horizontal | vertical
    },
    size: {
      type: [String, Number],
      value: 'middle' // small | middle | large | number
    },
    wrap: {
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
    gapValue: 32 // 默认 middle: 16px = 32rpx
  },
  observers: {
    'size': function(size) {
      const sizeMap = {
        small: 16, // 8px = 16rpx
        middle: 32, // 16px = 32rpx
        large: 48 // 24px = 48rpx
      };
      const gapValue = typeof size === 'number' ? size * 2 : (sizeMap[size] || 32);
      this.setData({ gapValue });
    }
  }
});

