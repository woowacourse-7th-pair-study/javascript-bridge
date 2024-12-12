import InputView from '../InputView.js';
import OutputView from '../OutputView.js';

class Controller {
  async start() {
    OutputView.printStartMessage();

    InputView.readBridgeSize()((input) => input);

    InputView.readMoving()((input) => input);
    InputView.readGameCommand()((input) => input);
  }
}

export default Controller;
