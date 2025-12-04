Component({
  properties: {
    layout: {
      type: String,
      value: 'vertical' // vertical | horizontal
    },
    floatingLabel: {
      type: Boolean,
      value: false
    },
    labelWidth: {
      type: [Number, String],
      value: undefined
    },
    labelAlign: {
      type: String,
      value: 'left' // left | right
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
    formValues: {},
    formErrors: {},
    formTouched: {}
  },
  methods: {
    setFieldValue(name, value) {
      const formValues = { ...this.data.formValues };
      formValues[name] = value;
      this.setData({ formValues });
    },
    getFieldValue(name) {
      return this.data.formValues[name];
    },
    setFieldError(name, error) {
      const formErrors = { ...this.data.formErrors };
      if (error) {
        formErrors[name] = error;
      } else {
        delete formErrors[name];
      }
      this.setData({ formErrors });
    },
    getFieldError(name) {
      return this.data.formErrors[name];
    },
    setFieldTouched(name, touched) {
      const formTouched = { ...this.data.formTouched };
      formTouched[name] = touched;
      this.setData({ formTouched });
    },
    validate() {
      // 简化验证逻辑
      return Promise.resolve();
    },
    submit() {
      this.triggerEvent('submit', this.data.formValues);
    }
  },
  relations: {
    '../form-item/form-item': {
      type: 'descendant',
      linked(target) {
        target.setParent(this);
      }
    }
  }
});

