Component({
  properties: {
    value: {
      type: Array,
      value: undefined
    },
    defaultValue: {
      type: Array,
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
    separator: {
      type: String,
      value: ' / '
    },
    changeOnSelect: {
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
    internalValue: [],
    currentValue: [],
    panels: []
  },
  attached() {
    this.setData({
      internalValue: this.data.defaultValue || [],
      currentValue: this.data.value !== undefined ? this.data.value : (this.data.defaultValue || [])
    });
    this.updatePanels();
    this.updateDisplayText();
  },
  observers: {
    'value': function(value) {
      if (value !== undefined) {
        this.setData({ currentValue: value });
        this.updatePanels();
        this.updateDisplayText();
      }
    },
    'options': function() {
      this.updatePanels();
      this.updateDisplayText();
    },
    'currentValue': function() {
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
    updatePanels() {
      const { options, currentValue } = this.data;
      const panels = [];
      
      let currentOptions = options;
      let selectedPath = [];
      
      // 根据当前值构建面板
      for (let i = 0; i < (currentValue?.length || 0); i++) {
        const val = currentValue[i];
        const option = currentOptions.find(opt => opt.value === val);
        if (option) {
          selectedPath.push(val);
          const panelOptions = currentOptions.map(opt => ({
            ...opt,
            selected: opt.value === val
          }));
          panels.push({ level: i, options: panelOptions });
          currentOptions = option.children || [];
        } else {
          break;
        }
      }
      
      // 如果有子选项，添加下一级面板
      if (currentOptions && currentOptions.length > 0) {
        panels.push({ level: panels.length, options: currentOptions.map(opt => ({ ...opt, selected: false })) });
      } else if (panels.length === 0) {
        // 如果没有值，显示第一级
        panels.push({ level: 0, options: options.map(opt => ({ ...opt, selected: false })) });
      }
      
      this.setData({ panels });
    },
    handleSelect(e) {
      const level = e.currentTarget.dataset.level;
      const value = e.currentTarget.dataset.value;
      const option = this.data.panels[level].options.find(opt => opt.value === value);
      
      if (option && option.disabled) return;
      
      // 构建新的值路径
      const newValue = this.data.currentValue.slice(0, level);
      newValue.push(value);
      
      // 检查是否有子选项
      const hasChildren = option.children && option.children.length > 0;
      
      if (this.data.value === undefined) {
        this.setData({ internalValue: newValue });
      }
      
      this.setData({ currentValue: newValue });
      
      // 如果 changeOnSelect 为 true 或者没有子选项，触发 onChange
      if (this.data.changeOnSelect || !hasChildren) {
        const selectedOptions = this.getSelectedOptions(newValue);
        this.triggerEvent('change', { value: newValue, selectedOptions });
        
        if (!hasChildren) {
          this.setData({ isOpen: false });
          this.triggerEvent('openchange', false);
        }
      }
      
      this.updatePanels();
    },
    getSelectedOptions(valuePath) {
      const { options } = this.data;
      const result = [];
      let currentOptions = options;
      
      for (const val of valuePath) {
        const option = currentOptions.find(opt => opt.value === val);
        if (option) {
          result.push(option);
          currentOptions = option.children || [];
        }
      }
      
      return result;
    }
  }
});

