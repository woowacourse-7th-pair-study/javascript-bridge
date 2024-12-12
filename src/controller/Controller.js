import BridgeGame from '../BridgeGame.js';
import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';

class Controller {
  #bridgeGame;

  async start() {
    OutputView.printStartMessage();

    const bridgeSize = await this.#getValidatedBridgeSizeInput();

    this.#bridgeGame = new BridgeGame(bridgeSize);

    await this.#playGame(bridgeSize);

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

  async #playGame(size) {
    this.#bridgeGame.initCondition();
    for (let round = 0; round < size; round++) {
      const movingInput = await this.#getValidatedMovingInput();

      const isMoveSuccess = this.#bridgeGame.move(movingInput);

      if (!isMoveSuccess) {
        OutputView.printMap(this.#bridgeGame.getCurrentMap());
        break;
      }

      OutputView.printMap(this.#bridgeGame.getCurrentMap());
    }
  }
}

export default Controller;
