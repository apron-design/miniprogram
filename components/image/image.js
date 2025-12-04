Component({
  properties: {
    src: {
      type: String,
      value: ''
    },
    alt: {
      type: String,
      value: ''
    },
    objectFit: {
      type: String,
      value: 'cover' // contain | cover | fill | none | scale-down
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
    loadingState: 'idle' // idle | loading | loaded | error
  },
  observers: {
    'src': function(src) {
      if (src) {
        this.setData({ loadingState: 'loading' });
      } else {
        this.setData({ loadingState: 'idle' });
      }
    }
  },
  methods: {
    handleLoad() {
      this.setData({ loadingState: 'loaded' });
      this.triggerEvent('load');
    },
    handleError() {
      this.setData({ loadingState: 'error' });
      this.triggerEvent('error');
    }
  }
});

