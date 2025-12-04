Component({
  properties: {
    format: {
      type: String,
      value: '******'
    },
    size: {
      type: String,
      value: 'default' // default | small
    },
    square: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'number' // number | text
    },
    value: {
      type: String,
      value: ''
    },
    defaultValue: {
      type: String,
      value: ''
    },
    status: {
      type: String,
      value: 'default' // default | success | error
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
    inputValue: '',
    isFocused: false,
    formatSlots: [],
    inputCount: 0
  },
  attached() {
    this.parseFormat();
    if (this.data.value === undefined) {
      this.setData({ inputValue: this.data.defaultValue });
    }
  },
  observers: {
    'format': function(format) {
      this.parseFormat();
    },
    'value': function(value) {
      if (value !== undefined) {
        this.setData({ inputValue: value });
        this.updateSlots();
      }
    },
    'inputValue': function() {
      this.updateSlots();
    }
  },
  computed: {
    inputType() {
      return this.data.type === 'number' ? 'number' : 'text';
    }
  },
  methods: {
    parseFormat() {
      const { format } = this.data;
      const slots = [];
      let inputIndex = 0;
      
      for (const char of format) {
        if (char === '*') {
          slots.push({ type: 'input', index: inputIndex });
          inputIndex++;
        } else {
          slots.push({ type: 'separator', char });
        }
      }
      
      this.setData({
        formatSlots: slots,
        inputCount: inputIndex
      });
      this.updateSlots();
    },
    updateSlots() {
      const { formatSlots, inputValue, isFocused, inputCount } = this.data;
      const cursorIndex = Math.min(inputValue.length, inputCount - 1);
      
      const updatedSlots = formatSlots.map((slot, idx) => {
        if (slot.type === 'separator') {
          return slot;
        }
        const inputIdx = slot.index;
        const char = inputValue[inputIdx] || '';
        const isActive = isFocused && inputIdx === cursorIndex;
        const isFilled = char !== '';
        
        return {
          ...slot,
          char,
          isActive,
          isFilled
        };
      });
      
      this.setData({ formatSlots: updatedSlots });
    },
    handleInput(e) {
      let newValue = e.detail.value;
      
      if (this.data.type === 'number') {
        newValue = newValue.replace(/\D/g, '');
      }
      
      newValue = newValue.slice(0, this.data.inputCount);
      
      if (this.data.value === undefined) {
        this.setData({ inputValue: newValue });
      }
      
      this.triggerEvent('change', newValue);
      
      if (newValue.length === this.data.inputCount) {
        this.triggerEvent('finish', newValue);
        this.triggerEvent('complete', newValue);
      }
    },
    handleFocus() {
      this.setData({ isFocused: true });
      this.triggerEvent('focus');
    },
    handleBlur() {
      this.setData({ isFocused: false });
      this.triggerEvent('blur');
    },
    handleContainerClick() {
      if (!this.data.disabled) {
        // 聚焦到隐藏输入框
        const query = this.createSelectorQuery();
        query.select('.apron-input-otp__hidden-input').focus();
      }
    }
  }
});

