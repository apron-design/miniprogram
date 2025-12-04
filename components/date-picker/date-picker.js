Component({
  properties: {
    value: {
      type: Object,
      value: undefined
    },
    defaultValue: {
      type: Object,
      value: undefined
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
    yearStart: {
      type: Number,
      value: 1900
    },
    yearEnd: {
      type: Number,
      value: 2100
    },
    yearLabel: {
      type: String,
      value: '年'
    },
    monthLabel: {
      type: String,
      value: '月'
    },
    dayLabel: {
      type: String,
      value: '日'
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
    internalValue: {},
    currentValue: {},
    activeTab: 'year',
    tabs: [
      { type: 'year', label: '年', active: true },
      { type: 'month', label: '月', active: false },
      { type: 'day', label: '日', active: false }
    ],
    years: [],
    months: [],
    days: [],
    yearIndex: 0,
    monthIndex: 0,
    dayIndex: 0,
    selectedYear: new Date().getFullYear(),
    selectedMonth: new Date().getMonth() + 1,
    selectedDay: new Date().getDate()
  },
  attached() {
    const now = new Date();
    const defaultValue = this.data.defaultValue || {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
    
    this.setData({
      internalValue: defaultValue,
      currentValue: this.data.value !== undefined ? this.data.value : defaultValue
    });
    
    this.initData();
  },
  observers: {
    'value': function(value) {
      if (value !== undefined) {
        this.setData({ currentValue: value });
        this.updateIndices();
      }
    },
    'yearStart, yearEnd': function() {
      this.initData();
    }
  },
  observers: {
    'currentValue': function() {
      this.updateDisplayText();
    }
  },
  data: {
    displayText: '请选择日期',
    hasValue: false,
    isActive: false
  },
  methods: {
    initData() {
      const { yearStart, yearEnd, currentValue } = this.data;
      const years = [];
      for (let i = yearStart; i <= yearEnd; i++) {
        years.push({ label: `${i}${this.data.yearLabel}`, value: i });
      }
      
      const months = [];
      for (let i = 1; i <= 12; i++) {
        months.push({ label: `${i}${this.data.monthLabel}`, value: i });
      }
      
      this.setData({ years, months });
      this.updateDays();
      this.updateIndices();
    },
    updateDays() {
      const { currentValue } = this.data;
      if (!currentValue.year || !currentValue.month) return;
      
      const daysInMonth = new Date(currentValue.year, currentValue.month, 0).getDate();
      const days = [];
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({ label: `${i}${this.data.dayLabel}`, value: i });
      }
      
      this.setData({ days });
    },
    updateIndices() {
      const { currentValue, years, months, days } = this.data;
      if (!currentValue.year || !currentValue.month || !currentValue.day) return;
      
      const yearIndex = years.findIndex(y => y.value === currentValue.year);
      const monthIndex = months.findIndex(m => m.value === currentValue.month);
      const dayIndex = days.findIndex(d => d.value === currentValue.day);
      
      this.setData({
        yearIndex: yearIndex >= 0 ? yearIndex : 0,
        monthIndex: monthIndex >= 0 ? monthIndex : 0,
        dayIndex: dayIndex >= 0 ? dayIndex : 0,
        selectedYear: currentValue.year,
        selectedMonth: currentValue.month,
        selectedDay: currentValue.day
      });
      this.updateDisplayText();
    },
    updateDisplayText() {
      const { currentValue, yearLabel, monthLabel, dayLabel } = this.data;
      const hasValue = currentValue.year !== undefined && currentValue.month !== undefined && currentValue.day !== undefined;
      const displayText = hasValue 
        ? `${currentValue.year}${yearLabel}${currentValue.month}${monthLabel}${currentValue.day}${dayLabel}`
        : '请选择日期';
      const isActive = this.data.isOpen || hasValue;
      this.setData({ hasValue, displayText, isActive });
    },
    toggleDropdown() {
      if (this.data.disabled || this.data.loading) return;
      const newOpen = !this.data.isOpen;
      this.setData({ isOpen: newOpen });
      this.triggerEvent('openchange', newOpen);
    },
    handleTabChange(e) {
      const type = e.currentTarget.dataset.type;
      const tabs = this.data.tabs.map(tab => ({
        ...tab,
        active: tab.type === type
      }));
      this.setData({ activeTab: type, tabs });
    },
    handleYearChange(e) {
      const index = e.detail.value;
      const year = this.data.years[index].value;
      const newValue = { ...this.data.currentValue, year };
      
      if (this.data.value === undefined) {
        this.setData({ internalValue: newValue });
      }
      this.setData({ currentValue: newValue, selectedYear: year, yearIndex: index });
      this.updateDays();
      this.triggerEvent('change', newValue);
    },
    handleMonthChange(e) {
      const index = e.detail.value;
      const month = this.data.months[index].value;
      const newValue = { ...this.data.currentValue, month };
      
      if (this.data.value === undefined) {
        this.setData({ internalValue: newValue });
      }
      this.setData({ currentValue: newValue, selectedMonth: month, monthIndex: index });
      this.updateDays();
      this.triggerEvent('change', newValue);
    },
    handleDayChange(e) {
      const index = e.detail.value;
      const day = this.data.days[index].value;
      const newValue = { ...this.data.currentValue, day };
      
      if (this.data.value === undefined) {
        this.setData({ internalValue: newValue });
      }
      this.setData({ currentValue: newValue, selectedDay: day, dayIndex: index });
      this.triggerEvent('change', newValue);
    }
  }
});

