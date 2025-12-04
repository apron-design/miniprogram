Component({
  properties: {
    square: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: 'middle' // mini | small | middle | large
    },
    src: {
      type: String,
      value: ''
    },
    alt: {
      type: String,
      value: ''
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

