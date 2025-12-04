Component({
  properties: {
    loading: {
      type: Boolean,
      value: true
    },
    animated: {
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
    rows: [
      { width: '100%' },
      { width: '100%' },
      { width: '60%' }
    ]
  }
});

