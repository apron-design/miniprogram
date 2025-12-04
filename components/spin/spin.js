Component({
  properties: {
    loading: {
      type: Boolean,
      value: true
    },
    text: {
      type: String,
      value: '加载中'
    },
    placement: {
      type: String,
      value: 'center' // center | top | bottom | left | right | top-left | top-right | bottom-left | bottom-right
    },
    fullscreen: {
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
  }
});

