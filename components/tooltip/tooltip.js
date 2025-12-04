Component({
  properties: {
    content: {
      type: String,
      value: ''
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
    visible: false,
    tooltipStyle: '',
    customTooltipClass: ''
  },
  methods: {
    handleTriggerTouchStart() {
      this.setData({ visible: true });
    },
    handleTriggerTouchEnd() {
      setTimeout(() => {
        this.setData({ visible: false });
      }, 200);
    }
  }
});

