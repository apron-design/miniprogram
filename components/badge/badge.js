Component({
  properties: {
    dot: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: undefined
    },
    overflowCount: {
      type: Number,
      value: 99
    },
    content: {
      type: String,
      value: undefined
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
    displayCount: '',
    isMultiDigit: false
  },
  observers: {
    'count, overflowCount': function(count, overflowCount) {
      if (count === undefined || count <= 0) {
        this.setData({
          displayCount: '',
          isMultiDigit: false
        });
        return;
      }
      const displayCount = count > overflowCount ? `${overflowCount}+` : String(count);
      this.setData({
        displayCount: displayCount,
        isMultiDigit: displayCount.length > 1
      });
    }
  }
});

