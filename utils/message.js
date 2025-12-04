// Message 全局管理器
let messageList = [];

const getMessageContainer = () => {
  return getApp().globalData.messageContainer;
};

const showMessage = (type, content, duration = 5000) => {
  const messageContainer = getMessageContainer();
  if (!messageContainer) {
    console.warn('Message container not found, please add <apron-message id="apron-message-container"></apron-message> to your page');
    return;
  }

  const id = `message-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const message = {
    id,
    type,
    content,
    visible: true,
    duration
  };

  messageList.push(message);
  messageContainer.setData({
    messages: messageList
  });

  if (duration > 0) {
    setTimeout(() => {
      removeMessage(id);
    }, duration);
  }

  return id;
};

const removeMessage = (id) => {
  const messageContainer = getMessageContainer();
  messageList = messageList.map(msg => 
    msg.id === id ? { ...msg, visible: false } : msg
  );
  
  if (messageContainer) {
    messageContainer.setData({
      messages: messageList
    });
  }
  
  setTimeout(() => {
    messageList = messageList.filter(msg => msg.id !== id);
    if (messageContainer) {
      messageContainer.setData({
        messages: messageList
      });
    }
  }, 300);
};

const clearAll = () => {
  const messageContainer = getMessageContainer();
  messageList = [];
  if (messageContainer) {
    messageContainer.setData({
      messages: []
    });
  }
};

module.exports = {
  show: showMessage,
  info: (content, duration) => showMessage('info', content, duration),
  success: (content, duration) => showMessage('success', content, duration),
  warning: (content, duration) => showMessage('warning', content, duration),
  error: (content, duration) => showMessage('error', content, duration),
  remove: removeMessage,
  clear: clearAll
};

