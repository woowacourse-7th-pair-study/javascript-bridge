import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../BridgeRandomNumberGenerator.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #gameClear;
  #round;
  #index;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    this.#gameClear = '실패';
    this.#round = 1;
    this.#index = 0;
  }

  move(nextPosition) {
    const moveResult = this.#canMove(nextPosition);
    this.#index += 1;

    return moveResult;
  }

  #canMove(nextPosition) {
    if (this.#bridge[this.#index] === nextPosition) return 'O';

    return 'X';
  }

  retry() {
    this.#round += 1;
    this.#index = 0;
  }

  getResult() {
    if (this.#index === this.#bridge.length) this.#gameClear = '성공';
    return { round: this.#round, clear: this.#gameClear };
  }
}

export default BridgeGame;
