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
    placeholder: {
      type: String,
      value: '请选择'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    inflow: {
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
    isOpen: false,
    internalValue: undefined,
    currentValue: undefined
  },
  attached() {
    this.setData({
      internalValue: this.data.defaultValue,
      currentValue: this.data.value !== undefined ? this.data.value : this.data.defaultValue
    });
    this.updateDisplayText();
  },
  observers: {
    'value': function(value) {
      if (value !== undefined) {
        this.setData({ currentValue: value });
        this.updateDisplayText();
      }
    },
    'currentValue, options': function() {
      this.updateDisplayText();
    }
  },
  data: {
    hasValue: false,
    displayText: '',
    isActive: false
  },
  methods: {
    toggleDropdown() {
      if (this.data.disabled || this.data.loading) return;
      const newOpen = !this.data.isOpen;
      this.setData({ isOpen: newOpen });
      this.triggerEvent('openchange', newOpen);
    },
    handleSelect(e) {
      const value = e.currentTarget.dataset.value;
      const option = this.data.options.find(opt => opt.value === value);
      if (option && option.disabled) return;
      
      if (this.data.value === undefined) {
        this.setData({ internalValue: value });
      }
      this.setData({ 
        currentValue: value,
        isOpen: false
      });
      this.triggerEvent('change', { value, option });
      this.triggerEvent('openchange', false);
    }
  },
  methods: {
    updateDisplayText() {
      const { currentValue, options, placeholder } = this.data;
      const hasValue = currentValue !== undefined;
      const option = hasValue ? options.find(opt => opt.value === currentValue) : null;
      const displayText = option ? option.label : placeholder;
      const isActive = this.data.isOpen || hasValue;
      this.setData({ hasValue, displayText, isActive });
    },
    toggleDropdown() {

