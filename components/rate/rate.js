Component({
  properties: {
    value: {
      type: Number,
      value: undefined
    },
    defaultValue: {
      type: Number,
      value: 0
    },
    count: {
      type: Number,
      value: 5
    },
    allowControl: {
      type: Boolean,
      value: false
    },
    allowHalf: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    showValue: {
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
    internalValue: 0,
    stars: [],
    formattedValue: '0.0'
  },
  observers: {
    'value, defaultValue, count': function() {
      this.updateStars();
    }
  },
  attached() {
    this.setData({ internalValue: this.data.defaultValue });
    this.updateStars();
  },
  methods: {
    updateStars() {
      const { value, internalValue, count, allowHalf } = this.data;
      const currentValue = value !== undefined ? value : internalValue;
      const stars = [];
      
      for (let i = 0; i < count; i++) {
        const starValue = i + 1;
        const halfStarValue = i + 0.5;
        
        let fillPercentage = 0;
        if (currentValue >= starValue) {
          fillPercentage = 100;
        } else if (allowHalf && currentValue >= halfStarValue) {
          fillPercentage = ((currentValue - i) / 1) * 100;
        }
        
        const isActive = fillPercentage > 0;
        const isPartial = fillPercentage > 0 && fillPercentage < 100;
        const clipPath = isPartial ? `inset(0 ${100 - fillPercentage}% 0 0)` : '';
        
        stars.push({
          isActive,
          clipPath
        });
      }
      
      const formattedValue = currentValue.toFixed(1);
      this.setData({ stars, formattedValue });
    },
    handleClick(e) {
      if (!this.data.allowControl || this.data.disabled) return;
      
      const index = e.currentTarget.dataset.index;
      const newValue = index + 1;
      
      if (this.data.value === undefined) {
        this.setData({ internalValue: newValue });
      }
      this.triggerEvent('change', newValue);
      this.updateStars();
    }
  }
});

