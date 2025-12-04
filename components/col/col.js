Component({
  properties: {
    span: {
      type: [Number, String],
      value: undefined
    },
    offset: {
      type: Number,
      value: undefined
    },
    order: {
      type: Number,
      value: undefined
    },
    push: {
      type: Number,
      value: undefined
    },
    pull: {
      type: Number,
      value: undefined
    },
    flex: {
      type: [String, Number],
      value: undefined
    },
    xs: {
      type: [Number, String, Object],
      value: undefined
    },
    sm: {
      type: [Number, String, Object],
      value: undefined
    },
    md: {
      type: [Number, String, Object],
      value: undefined
    },
    lg: {
      type: [Number, String, Object],
      value: undefined
    },
    xl: {
      type: [Number, String, Object],
      value: undefined
    },
    xxl: {
      type: [Number, String, Object],
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
    horizontalGutter: 0,
    sizeClassNames: '',
    flexStyle: ''
  },
  observers: {
    'span, offset, order, push, pull, xs, sm, md, lg, xl, xxl': function() {
      this.generateClassNames();
    },
    'flex': function(flex) {
      this.parseFlex(flex);
    }
  },
  attached() {
    this.generateClassNames();
    this.parseFlex(this.data.flex);
  },
  methods: {
    setGutter(horizontalGutter, verticalGutter) {
      this.setData({ horizontalGutter });
    },
    generateClassNames() {
      const { span, offset, order, push, pull, xs, sm, md, lg, xl, xxl } = this.data;
      const sizeClassNames = [];
      
      const sizes = { xs, sm, md, lg, xl, xxl };
      
      Object.entries(sizes).forEach(([size, value]) => {
        if (value === undefined) return;
        
        if (typeof value === 'number' || typeof value === 'string') {
          const numValue = Number(value);
          if (numValue > 0) {
            sizeClassNames.push(`apron-col-${size}-${numValue}`);
          } else if (numValue === 0) {
            sizeClassNames.push(`apron-col-${size}-0`);
          }
        } else if (typeof value === 'object') {
          if (value.span !== undefined) {
            sizeClassNames.push(`apron-col-${size}-${value.span}`);
          }
          if (value.offset !== undefined) {
            sizeClassNames.push(`apron-col-${size}-offset-${value.offset}`);
          }
          if (value.order !== undefined) {
            sizeClassNames.push(`apron-col-${size}-order-${value.order}`);
          }
          if (value.push !== undefined) {
            sizeClassNames.push(`apron-col-${size}-push-${value.push}`);
          }
          if (value.pull !== undefined) {
            sizeClassNames.push(`apron-col-${size}-pull-${value.pull}`);
          }
        }
      });
      
      this.setData({ sizeClassNames: sizeClassNames.join(' ') });
    },
    parseFlex(flex) {
      if (!flex) {
        this.setData({ flexStyle: '' });
        return;
      }
      
      let flexValue = '';
      if (typeof flex === 'number') {
        flexValue = `${flex} ${flex} auto`;
      } else if (/^\d+(\.\d+)?(px|em|rem|%|vw|vh)?$/.test(flex)) {
        flexValue = `0 0 ${flex}`;
      } else {
        flexValue = flex;
      }
      
      this.setData({ flexStyle: `flex: ${flexValue};` });
    }
  }
});

