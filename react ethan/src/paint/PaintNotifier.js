  class ButtonSelectMessage {
    constructor(selectedButton, user, message) {
      this.selectedButton = this.selectedButton;
      this.user = user;
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
  
    constructor() {
      let port = window.location.port;
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
      this.socket.onopen = (event) => {
        this.receiveEvent(new JoinOrLeaveMessage('Time Slot Machine user ', PaintMessage.user, ' connected'));
      };
      this.socket.onclose = (event) => {
        this.receiveEvent(new JoinOrLeaveMessage('Time slot machine user ', PaintMessage.user, ' disconnected'));
      };
      this.socket.onmessage = async (msg) => {
        try {
          const event = JSON.parse(await msg.data.text());
          this.receiveEvent(event);
        } catch {}
      };
    }
  
    broadcastEvent(selectedButton, user, message) {
      const newMessage = new PaintMessage(selectedButton, user, message);
      this.socket.send(JSON.stringify(newMessage));
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  
    removeHandler(handler) {
      this.handlers.filter((h) => h !== handler);
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
  
  const PaintNotifier = new PaintNotifier();
  export { JoinOrLeaveMessage, PaintNotifier, ButtonSelectMessage };
  