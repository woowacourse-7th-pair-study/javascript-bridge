const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');

class Controller {
  init() {
    OutputView.printGreet();
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
