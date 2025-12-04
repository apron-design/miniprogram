Component({
  properties: {
    accordion: {
      type: Boolean,
      value: false
    },
    defaultActiveKeys: {
      type: Array,
      value: []
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
    activeKeys: []
  },
  attached() {
    this.setData({ activeKeys: this.data.defaultActiveKeys || [] });
  },
  methods: {
    toggleItem(key) {
      const { accordion, activeKeys } = this.data;
      let newActiveKeys;
      
      if (accordion) {
        newActiveKeys = activeKeys.includes(key) ? [] : [key];
      } else {
        newActiveKeys = activeKeys.includes(key)
          ? activeKeys.filter(k => k !== key)
          : [...activeKeys, key];
      }
      
      this.setData({ activeKeys: newActiveKeys });
      this.triggerEvent('change', newActiveKeys);
    }
  },
  relations: {
    '../collapse-item/collapse-item': {
      type: 'descendant',
      linked(target) {
        target.setParent(this);
      }
    }
  }
});

