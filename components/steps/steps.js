Component({
  properties: {
    items: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    },
    labelPlacement: {
      type: String,
      value: 'bottom' // top | bottom | both
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
    processedItems: []
  },
  observers: {
    'items, current': function(items, current) {
      this.processItems(items, current);
    }
  },
  attached() {
    this.processItems(this.data.items, this.data.current);
  },
  methods: {
    processItems(items, current) {
      const processedItems = items.map((item, index) => {
        let status = item.status;
        if (!status) {
          if (index < current) status = 'completed';
          else if (index === current) status = 'current';
          else status = 'pending';
        }
        
        let lineClass = 'pending';
        if (index < items.length - 1) {
          const nextStatus = items[index + 1].status || (index + 1 < current ? 'completed' : (index + 1 === current ? 'current' : 'pending'));
          if (status === 'completed' && nextStatus === 'completed') {
            lineClass = 'completed';
          } else if (status === 'completed' && nextStatus === 'current') {
            lineClass = 'completed-to-current';
          } else if (status === 'current' && nextStatus === 'pending') {
            lineClass = 'current-to-pending';
          }
        }
        
        return {
          ...item,
          status,
          lineClass
        };
      });
      
      this.setData({ processedItems });
    }
  }
});

