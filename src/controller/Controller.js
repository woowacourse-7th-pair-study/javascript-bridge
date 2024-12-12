import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';

class Controller {
  async start() {
    OutputView.printStartMessage();

    const bridgeSize = await this.#getValidatedBridgeSizeInput();

    const movingInput = await this.#getValidatedMovingInput();

    InputView.readGameCommand()((input) => input);
  }

  #getValidatedBridgeSizeInput() {
    return InputView.readBridgeSize()((input) => {
      const bridgeSize = Parser.stringToNumber(input);
      Validator.validateBridgeSizeInput(bridgeSize);

      return bridgeSize;
    });
  }

  #getValidatedMovingInput() {
    return InputView.readMoving()((input) => {
      Validator.validateMovingInput(input);

      return input;
    });
  }
}

export default Controller;
