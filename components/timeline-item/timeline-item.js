Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    date: {
      type: String,
      value: ''
    },
    dotColor: {
      type: String,
      value: 'default' // default | primary | main | success | warning | danger
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
    side: 'right'
  },
  methods: {
    setSide(side) {
      this.setData({ side });
    }
  }
});

