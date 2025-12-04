Component({
  properties: {
    mode: {
      type: String,
      value: 'click' // click | hover
    },
    title: {
      type: String,
      value: ''
    },
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
    popoverStyle: '',
    customPopoverClass: ''
  },
  methods: {
    handleTriggerClick() {
      if (this.data.mode === 'click') {
        this.setData({ visible: !this.data.visible });
      }
    },
    handleTriggerTouchStart() {
      if (this.data.mode === 'hover') {
        this.setData({ visible: true });
      }
    },
    handleTriggerTouchEnd() {
      if (this.data.mode === 'hover') {
        setTimeout(() => {
          this.setData({ visible: false });
        }, 200);
      }
    }
  }
});

