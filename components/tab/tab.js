Component({
  properties: {
    tabKey: {
      type: String,
      value: ''
    },
    disabled: {
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
    },
    handleClick() {
      if (this.data.disabled || !this.data.parent) return;
      this.data.parent.setActiveKey(this.data.tabKey);
      this.updateActiveState();
    }
  },
  observers: {
    'tabKey': function() {
      this.updateActiveState();
    }
  }
});

