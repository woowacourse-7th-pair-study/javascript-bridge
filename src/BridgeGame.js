import BridgeMaker from './BridgeMaker.js';
import BridgeRandomNumberGenerator from './BridgeRandomNumberGenerator.js';
import { RULE } from './constant/rule.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #currentPosition;
  #tryCount;
  #movingMap;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    this.#currentPosition = -1;
    this.#tryCount = 0;
    this.#movingMap = new Map([
      [RULE.moveInput.up, []],
      [RULE.moveInput.down, []],
    ]);
  }

  initCondition() {
    this.#currentPosition = -1;
    this.#tryCount += 1;
  }

  move(movingInput) {
    this.#currentPosition += 1;
    if (movingInput === this.#bridge[this.#currentPosition]) {
      this.#movingMap.set(movingInput, [
        ...this.#movingMap.get(movingInput),
        'O',
      ]);
      this.#movingMap.set(this.#getOppositeMovingInput(movingInput), [
        ...this.#movingMap.get(this.#getOppositeMovingInput(movingInput)),
        '',
      ]);
      return true;
    }

    this.#movingMap.set(movingInput, [
      ...this.#movingMap.get(movingInput),
      'X',
    ]);
    this.#movingMap.set(this.#getOppositeMovingInput(movingInput), [
      ...this.#movingMap.get(this.#getOppositeMovingInput(movingInput)),
      '',
    ]);
    return false;
  }

  #getOppositeMovingInput(movingInput) {
    if (movingInput === RULE.moveInput.up) return RULE.moveInput.down;

    return RULE.moveInput.up;
  }

  retry() {}
}

export default BridgeGame;
