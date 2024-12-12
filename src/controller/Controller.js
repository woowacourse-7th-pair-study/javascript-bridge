import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import BridgeGame from '../model/BridgeGame.js';
import Player from '../model/Player.js';

import validateSize from '../util/validateSize.js';
import validateMove from '../util/validateMove.js';
import validateCommand from '../util/validateCommand.js';
import tryInput from '../util/tryInput.js';

class Controller {
  #bridgeGame;
  #player;

  constructor() {
    this.#player = new Player();
  }

  async init() {
    OutputView.printGreet();

    const size = await tryInput(() => this.#readSize());
    this.#bridgeGame = new BridgeGame(size);
    await this.#moveProcess(size);
    const finalResult = this.#bridgeGame.getResult();
    OutputView.printResult(this.#player.getPosition(), finalResult);
  }

  async #moveProcess(size) {
    let tryCount = size;

    while (tryCount > 0) {
      const moveResult = await this.#move();
      const canMoveAgain = this.#checkGameOver(moveResult);

      if (!canMoveAgain) {
        const command = await tryInput(() => this.#readCommand());
        if (command === 'Q') {
          tryCount = 0;
          break;
        } else {
          this.#bridgeGame.retry();
          this.#player.retry();
          tryCount = size;
          continue;
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

  async #move() {
    const moveTo = await tryInput(() => this.#readMove());
    const moveResult = this.#bridgeGame.move(moveTo);

    this.#player.updatePosition(moveResult, moveTo);
    OutputView.printMap(this.#player.getPosition());

    return moveResult;
  }

  async #readSize() {
    const size = await InputView.readBridgeSize();
    validateSize(size);

    return size;
  }

  async #readMove() {
    const moveTo = await InputView.readMoving();
    validateMove(moveTo);

    return moveTo;
  }

  async #readCommand() {
    const command = await InputView.readGameCommand();
    validateCommand(command);

    return command;
  }
}

export default Controller;
