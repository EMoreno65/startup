class ButtonSelectMessage {
  constructor(selectedButton, user, message) {
    this.selectedButton = selectedButton;
    this.user = user;
    this.message = message;  
  }
}

class JoinOrLeaveMessage {
  constructor(user) {
    this.user = user;
  }
}

class PaintNotifier {
  events = [];
  handlers = [];
  messageQueue = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
    console.log("attempted to create the new websocket")
    
    this.socket.onopen = () => {
      console.log("WebSocket connection established.");
      this.messageQueue.forEach((message) => this.socket.send(message));
      this.messageQueue = [];
    };
    
    this.socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch (err) {
        console.error('Error parsing message:', err);
      }
    };
  }

  sendMessage(message) {
    const messageString = JSON.stringify(message);
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(messageString);
    } else {
      this.messageQueue.push(messageString);
    }
  }

  sendJoinRequest() {
    const message = new JoinOrLeaveMessage('User joined');
    this.sendMessage(message);
  }

  sendLeaveRequest() {
    const message = new JoinOrLeaveMessage('User left');
    this.sendMessage(message);
  }

  sendButtonRequest(selectedButton, user, message) {
    const buttonMessage = new ButtonSelectMessage(selectedButton, user, message);
    this.sendMessage(buttonMessage);
  }

  broadcastEvent(selectedButton, user, message) {
    const newMessage = new PaintMessage(selectedButton, user, message);
    this.sendMessage(newMessage);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);
    this.events.forEach((e) => {
      this.handlers.forEach((handler) => {
        handler(e);
      });
    });
  }
}


export default PaintNotifier;
export { JoinOrLeaveMessage, ButtonSelectMessage };
  