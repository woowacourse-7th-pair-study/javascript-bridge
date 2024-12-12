const InputView = require('../view/InputView.js');

class Controller {
  init() {
    this.#readSize();
  }

  #readSize() {
    InputView.readBridgeSize((input) => {
      const size = input;
      // 다음 로직 구현
    });
  }
}

module.exports = Controller;
