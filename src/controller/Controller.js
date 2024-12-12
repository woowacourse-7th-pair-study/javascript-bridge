import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import BridgeGame from '../model/BridgeGame.js';
import Player from '../model/Player.js';

import validateSize from '../util/validateSize.js';
import validateMove from '../util/validateMove.js';

class Controller {
  #bridgeGame;
  #player;

  constructor() {
    this.#player = new Player();
  }

  async init() {
    OutputView.printGreet();

    const size = await this.#readSize();
    this.#bridgeGame = new BridgeGame(size);
    await this.#moveProcess(size);
    const finalResult = this.#bridgeGame.getResult();
    OutputView.printResult(this.#player.getPosition(), finalResult);
  }

  async #moveProcess(size) {
    let tryCount = size;

    while (tryCount) {
      const moveResult = await this.#move();
      const canMoveAgain = this.#checkGameOver(moveResult);

      if (!canMoveAgain) {
        const command = await this.#readCommand();
        if (command === 'Q') {
          tryCount = 0;
          break;
        } else {
          this.#bridgeGame.retry();
          this.#player.retry();
          return await this.#moveProcess(size);
        }
      }

      tryCount -= 1;
    }
  }

  #checkGameOver(moveResult) {
    if (moveResult === 'X') {
      return false;
    }
    return true;
  }

  async #readSize() {
    try {
      const size = await InputView.readBridgeSize();
      validateSize(size);
      return size;
    } catch (e) {
      OutputView.printError(e.message);
      return await this.#readSize();
    }
  }

  async #readMove() {
    try {
      const moveTo = await InputView.readMoving();
      validateMove(moveTo);

      return moveTo;
    } catch (e) {
      OutputView.printError(e.message);
      return await this.#readMove();
    }
  }

  async #move() {
    const moveTo = await this.#readMove();
    const moveResult = this.#bridgeGame.move(moveTo);

    this.#player.updatePosition(moveResult, moveTo);
    OutputView.printMap(this.#player.getPosition());

    return moveResult;
  }

  async #readCommand() {
    try {
      const command = await InputView.readGameCommand();

      return command;
    } catch (e) {
      OutputView.printError(e.message);
      return await this.#readCommand();
    }
  }
}

export default Controller;
