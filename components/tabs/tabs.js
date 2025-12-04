Component({
  properties: {
    defaultActiveKey: {
      type: String,
      value: ''
    },
    capsule: {
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
    activeKey: ''
  },
  attached() {
    this.setData({ activeKey: this.data.defaultActiveKey || '' });
  },
  methods: {
    setActiveKey(key) {
      this.setData({ activeKey: key });
      this.triggerEvent('change', key);
    }
  },
  relations: {
    '../tab-list/tab-list': {
      type: 'descendant',
      linked(target) {
        target.setParent(this);
      }
    },
    '../tab-panel/tab-panel': {
      type: 'descendant',
      linked(target) {
        target.setParent(this);
      }
    }
  }
});

