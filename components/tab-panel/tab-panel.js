Component({
  properties: {
    tabKey: {
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
    isActive: false,
    parent: null
  },
  methods: {
    setParent(parent) {
      this.setData({ parent });
      this.updateActiveState();
    },
    updateActiveState() {
      if (!this.data.parent) return;
      const activeKey = this.data.parent.data.activeKey || '';
      this.setData({ isActive: activeKey === this.data.tabKey });
    }
  },
  observers: {
    'tabKey': function() {
      this.updateActiveState();
    }
  }
});

