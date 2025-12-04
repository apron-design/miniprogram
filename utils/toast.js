// Toast 全局工具函数
let toastComponent = null;

export const toast = {
  show(options) {
    const pages = getCurrentPages();
    if (pages.length === 0) return;
    
    const currentPage = pages[pages.length - 1];
    const toastComponent = currentPage.selectComponent('#apron-toast');
    if (toastComponent) {
      toastComponent.show(options);
    }
  },
  success(textOrOptions) {
    const options = typeof textOrOptions === 'string' 
      ? { text: textOrOptions, type: 'success' }
      : { ...textOrOptions, type: 'success' };
    this.show(options);
  },
  fail(textOrOptions) {
    const options = typeof textOrOptions === 'string'
      ? { text: textOrOptions, type: 'fail' }
      : { ...textOrOptions, type: 'fail' };
    this.show(options);
  },
  danger(textOrOptions) {
    const options = typeof textOrOptions === 'string'
      ? { text: textOrOptions, type: 'danger' }
      : { ...text: textOrOptions, type: 'danger' };
    this.show(options);
  },
  loading(textOrOptions) {
    const options = typeof textOrOptions === 'string'
      ? { text: textOrOptions, type: 'loading' }
      : { ...textOrOptions, type: 'loading' };
    this.show(options);
  },
  close() {
    const pages = getCurrentPages();
    if (pages.length === 0) return;
    
    const currentPage = pages[pages.length - 1];
    const toastComponent = currentPage.selectComponent('#apron-toast');
    if (toastComponent) {
      toastComponent.close();
    }
  }
};

