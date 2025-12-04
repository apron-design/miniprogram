Component({
  properties: {
    side: {
      type: String,
      value: 'right' // left | right | both
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
  relations: {
    '../timeline-item/timeline-item': {
      type: 'descendant',
      linked(target) {
        target.setSide(this.data.side);
      }
    }
  }
});

