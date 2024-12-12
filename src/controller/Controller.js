import BridgeGame from '../BridgeGame.js';
import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import { RULE } from '../constant/rule.js';
import Parser from '../lib/Parser.js';
import Validator from '../lib/Validator.js';

class Controller {
  #bridgeGame;

  async start() {
    OutputView.printStartMessage();

    const bridgeSize = await this.#getValidatedBridgeSizeInput();

    this.#bridgeGame = new BridgeGame(bridgeSize);

    await this.#playGame(bridgeSize);
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

  async #playGame() {
    const bridgeSize = this.#bridgeGame.getBridgeSize();
    let isGameSuccess = true;
    for (let round = 0; round < bridgeSize; round++) {
      const movingInput = await this.#getValidatedMovingInput();

      const isMoveSuccess = this.#bridgeGame.move(movingInput);

      if (!isMoveSuccess) {
        OutputView.printMap(this.#bridgeGame.getCurrentMap());
        isGameSuccess = false;
        break;
      }

      OutputView.printMap(this.#bridgeGame.getCurrentMap());
    }

    this.#finishGame(isGameSuccess);
  }

  async #finishGame(isGameSuccess) {
    if (isGameSuccess) return;

    const restartInput = await this.#getValidatedGameCommandInput();

    if (restartInput === RULE.restartInput.restart) {
      this.#bridgeGame.retry();
      this.#playGame();
    }
  }
}

export default Controller;
