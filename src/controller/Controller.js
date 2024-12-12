import BridgeGame from '../BridgeGame.js';
import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';

class Controller {
  async start() {
    OutputView.printStartMessage();

    const bridgeSize = await this.#getValidatedBridgeSizeInput();

    const bridgeGame = new BridgeGame(bridgeSize);

    const movingInput = await this.#getValidatedMovingInput();

    const restartInput = await this.#getValidatedGameCommandInput();
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

  #getValidatedGameCommandInput() {
    return InputView.readGameCommand()((input) => {
      Validator.validateGameCommandInput(input);

      return input;
    });
  }
}

export default Controller;
