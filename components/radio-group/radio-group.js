Component({
  properties: {
    value: {
      type: [String, Number],
      value: undefined
    },
    defaultValue: {
      type: [String, Number],
      value: undefined
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
    name: {
      type: String,
      value: ''
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
    internalValue: undefined,
    groupName: ''
  },
  attached() {
    this.setData({
      groupName: this.data.name || `radio-group-${Date.now()}`,
      internalValue: this.data.defaultValue
    });
  },
  methods: {
    handleChange(optionValue) {
      if (this.data.value === undefined) {
        this.setData({ internalValue: optionValue });
      }
      this.triggerEvent('change', optionValue);
    }
  }
});

