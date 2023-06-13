export class Observable {
  constructor() {
    this.subscriber = null;
  }

  setSubscriber(subscriber) {
    this.subscriber = subscriber;
  }

  twoVariableNotify(data1, data2) {
    if (typeof this.subscriber === 'function') {
      this.subscriber(data1, data2);
    }
  }
}