import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import validateBridgeSize from '../validations/validateBridgeSize.js';
import parser from '../utils/parser.js';
import validateUserResponse from '../validations/validateUserResponse.js';
import { GAME_COMMAND_RESPONSE, MOVING_RESPONSE } from '../constants/constants.js';

class Controller {
  async start() {
    OutputView.printStartMessage();
    const bridgeSize = await this.#getValidatedBridgeSize();



    // const moving = await this.#getValidatedMoving();
    // const gameCommand = await this.#getValidatedGameCommand();

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
