Component({
  properties: {
    type: {
      type: String,
      value: 'info' // info | success | warning | error
    },
    content: {
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

