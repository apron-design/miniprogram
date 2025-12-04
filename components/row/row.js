Component({
  properties: {
    gutter: {
      type: [Number, Array, Object],
      value: 0
    },
    justify: {
      type: String,
      value: 'start' // start | end | center | space-around | space-between | space-evenly
    },
    align: {
      type: String,
      value: 'top' // top | middle | bottom | stretch
    },
    wrap: {
      type: Boolean,
      value: true
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
    horizontalGutter: 0,
    verticalGutter: 0
  },
  observers: {
    'gutter': function(gutter) {
      this.normalizeGutter(gutter);
    }
  },
  attached() {
    this.normalizeGutter(this.data.gutter);
  },
  methods: {
    normalizeGutter(gutter) {
      let horizontalGutter = 0;
      let verticalGutter = 0;
      
      if (typeof gutter === 'number') {
        horizontalGutter = gutter;
      } else if (Array.isArray(gutter)) {
        horizontalGutter = gutter[0] || 0;
        verticalGutter = gutter[1] || 0;
      } else if (typeof gutter === 'object') {
        // 响应式 gutter，简化处理使用 xs
        const responsiveGutter = gutter.xs || gutter.sm || gutter.md || gutter.lg || gutter.xl || gutter.xxl || 0;
        if (typeof responsiveGutter === 'number') {
          horizontalGutter = responsiveGutter;
        } else if (Array.isArray(responsiveGutter)) {
          horizontalGutter = responsiveGutter[0] || 0;
          verticalGutter = responsiveGutter[1] || 0;
        }
      }
      
      this.setData({
        horizontalGutter: horizontalGutter * 2, // px to rpx
        verticalGutter: verticalGutter * 2
      });
    }
  },
  relations: {
    '../col/col': {
      type: 'descendant',
      linked(target) {
        // 传递 gutter 信息给子组件
        target.setGutter(this.data.horizontalGutter, this.data.verticalGutter);
      }
    }
  }
});

