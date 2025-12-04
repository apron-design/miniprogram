Component({
  properties: {
    count: {
      type: Number,
      value: 0
    },
    pageSize: {
      type: Number,
      value: 10
    },
    current: {
      type: Number,
      value: undefined
    },
    defaultCurrent: {
      type: Number,
      value: 1
    },
    size: {
      type: String,
      value: 'default' // large | default | small
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
    internalCurrent: 1,
    totalPages: 0,
    pageNumbers: []
  },
  observers: {
    'count, pageSize': function(count, pageSize) {
      this.calculatePages();
    },
    'current': function(current) {
      if (current !== undefined) {
        this.calculatePages();
      }
    }
  },
  attached() {
    this.setData({ internalCurrent: this.data.defaultCurrent });
    this.calculatePages();
  },
  methods: {
    calculatePages() {
      const { count, pageSize, current, internalCurrent } = this.data;
      const totalPages = Math.ceil(count / pageSize);
      const currentPage = current !== undefined ? current : internalCurrent;
      
      // 生成页码列表
      const pageNumbers = [];
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        const showLeftEllipsis = currentPage > 4;
        const showRightEllipsis = currentPage < totalPages - 3;
        
        if (!showLeftEllipsis && showRightEllipsis) {
          for (let i = 1; i <= 5; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push('ellipsis-right');
          pageNumbers.push(totalPages);
        } else if (showLeftEllipsis && !showRightEllipsis) {
          pageNumbers.push(1);
          pageNumbers.push('ellipsis-left');
          for (let i = totalPages - 4; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else if (showLeftEllipsis && showRightEllipsis) {
          pageNumbers.push(1);
          pageNumbers.push('ellipsis-left');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push('ellipsis-right');
          pageNumbers.push(totalPages);
        }
      }
      
      this.setData({ totalPages, pageNumbers });
    },
    handlePageChange(e) {
      const page = e.currentTarget.dataset.page;
      this.goToPage(page);
    },
    handlePrev() {
      const currentPage = this.data.current !== undefined ? this.data.current : this.data.internalCurrent;
      this.goToPage(currentPage - 1);
    },
    handleNext() {
      const currentPage = this.data.current !== undefined ? this.data.current : this.data.internalCurrent;
      this.goToPage(currentPage + 1);
    },
    goToPage(page) {
      if (this.data.disabled) return;
      if (page < 1 || page > this.data.totalPages) return;
      
      const currentPage = this.data.current !== undefined ? this.data.current : this.data.internalCurrent;
      if (page === currentPage) return;
      
      if (this.data.current === undefined) {
        this.setData({ internalCurrent: page });
      }
      this.triggerEvent('change', page);
      this.calculatePages();
    }
  }
});

