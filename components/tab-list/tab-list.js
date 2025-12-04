Component({
  properties: {
    extra: {
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
  },
  data: {
    parent: null
  },
  methods: {
    setParent(parent) {
      this.setData({ parent });
    }
  },
  relations: {
    '../tabs/tabs': {
      type: 'ancestor'
    },
    '../tab/tab': {
      type: 'descendant',
      linked(target) {
        target.setParent(this.data.parent);
      }
    }
  }
});

