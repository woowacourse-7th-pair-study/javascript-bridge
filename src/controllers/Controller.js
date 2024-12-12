import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validateBridgeSize from '../validations/validateBridgeSize.js';
import parser from '../utils/parser.js';

class Controller {
  async start() {
    OutputView.printStartMessage();
    const bridgeSize = await this.#getValidatedBridgeSize();

  }

  async #getValidatedBridgeSize() {
    try {
      const bridgeSize = await InputView.readBridgeSize();
      const parsedBridgeSize = parser.stringToNumber(bridgeSize);
      validateBridgeSize(parsedBridgeSize);
      return parsedBridgeSize;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedBridgeSize();
    }
  }

  async #getValidatedMoving() {

  }

  async #getValidatedGameCommand() {

  }
}

export default Controller;
