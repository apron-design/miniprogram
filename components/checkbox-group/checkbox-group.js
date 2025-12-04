Component({
  properties: {
    value: {
      type: Array,
      value: []
    },
    defaultValue: {
      type: Array,
      value: []
    },
    options: {
      type: Array,
      value: []
    },
    disabled: {
      type: Boolean,
      value: false
    },
    direction: {
      type: String,
      value: 'horizontal' // horizontal | vertical
    },
    labelClickable: {
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
    internalValue: []
  },
  attached() {
    if (this.data.value === undefined || this.data.value.length === 0) {
      this.setData({ internalValue: this.data.defaultValue || [] });
    }
  },
  observers: {
    'value': function(value) {
      if (value !== undefined) {
        // 受控模式
      }
    }
  },
  relations: {
    '../checkbox/checkbox': {
      type: 'descendant',
      linked(target) {
        // 注册子组件
      }
    }
  },
  methods: {
    handleChange(optionValue, checked) {
      let newValue;
      const currentValue = this.data.value !== undefined ? this.data.value : this.data.internalValue;
      
      if (checked) {
        newValue = [...currentValue, optionValue];
      } else {
        newValue = currentValue.filter(v => v !== optionValue);
      }
      
      if (this.data.value === undefined) {
        this.setData({ internalValue: newValue });
      }
      this.triggerEvent('change', newValue);
    }
  }
});

