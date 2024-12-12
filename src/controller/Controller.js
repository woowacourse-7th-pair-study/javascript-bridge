import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';

class Controller {
  async start() {
    OutputView.printStartMessage();

    const bridgeSize = await this.#getValidatedBridgeSize();

    InputView.readMoving()((input) => input);
    InputView.readGameCommand()((input) => input);
  }

  #getValidatedBridgeSize() {
    return InputView.readBridgeSize()((input) => {
      const bridgeSize = Parser.stringToNumber(input);
      Validator.validateBridgeSizeInput(bridgeSize);

      return bridgeSize;
    });
  }
}

export default Controller;
