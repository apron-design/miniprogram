Component({
  properties: {
    itemKey: {
      type: String,
      value: ''
    },
    title: {
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
      const activeKeys = this.data.parent.data.activeKeys || [];
      this.setData({ isActive: activeKeys.includes(this.data.itemKey) });
    },
    handleClick() {
      if (this.data.disabled || !this.data.parent) return;
      this.data.parent.toggleItem(this.data.itemKey);
      this.updateActiveState();
    }
  },
  observers: {
    'itemKey': function() {
      this.updateActiveState();
    }
  }
});

