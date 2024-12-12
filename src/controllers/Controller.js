import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validateBridgeSize from '../validations/validateBridgeSize.js';
import parser from '../utils/parser.js';
import validateUserResponse from '../validations/validateUserResponse.js';
import { GAME_COMMAND_RESPONSE, MOVING_RESPONSE, RETRY } from '../constants/constants.js';
import BridgeGame from '../models/BridgeGame.js';

class Controller {
  async start() {
    OutputView.printStartMessage();
    const bridgeSize = await this.#getValidatedBridgeSize();
    const bridgeGame = new BridgeGame(bridgeSize);
    await this.#bridgeGameSystem(bridgeSize, bridgeGame);

    const userBridge = bridgeGame.getUserBridge();
    const hasTotalX = bridgeGame.checkTotalCannotMove();
    const tryCount = bridgeGame.getTryCount();
    OutputView.printResult(userBridge, hasTotalX, tryCount);
  }

  async #bridgeGameSystem(bridgeSize, bridgeGame) {
    let hasX = false;
    for (let count = 0; count < bridgeSize; count++) {
      const moving = await this.#getValidatedMoving();
      bridgeGame.move(count, moving);
      OutputView.printMap(bridgeGame.getUserBridge());

      hasX = bridgeGame.checkTotalCannotMove();
      if (hasX) break; // 현재 moving이 이동할 수 없는 칸('X')이면 break
    }
    if (hasX) await this.#checkCannotMove(bridgeSize, bridgeGame);
  }

  async #checkCannotMove(bridgeSize, bridgeGame) {
    const gameCommand = await this.#getValidatedGameCommand();
    if (gameCommand === RETRY) {
      bridgeGame.retry();
      await this.#bridgeGameSystem(bridgeSize, bridgeGame);
    }
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
    try {
      const moving = await InputView.readMoving();
      validateUserResponse(moving, MOVING_RESPONSE);
      return moving;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedMoving();
    }
  }

  async #getValidatedGameCommand() {
    try {
      const gameCommand = await InputView.readGameCommand();
      validateUserResponse(gameCommand, GAME_COMMAND_RESPONSE);
      return gameCommand;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.#getValidatedGameCommand();
    }
  }
}

export default Controller;
