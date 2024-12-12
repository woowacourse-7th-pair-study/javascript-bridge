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
    this.#tryCount = 1;
    this.#movingMap = new Map([
      [RULE.moveInput.up, []],
      [RULE.moveInput.down, []],
    ]);
  }

  move(movingInput) {
    this.#currentPosition += 1;
    const oppositeMovingInput = this.#getOppositeMovingInput(movingInput);
    if (movingInput === this.#bridge[this.#currentPosition]) {
      this.#setMovingMap(movingInput, 'O');
      this.#setMovingMap(oppositeMovingInput, ' ');
      return true;
    }

    this.#setMovingMap(movingInput, 'X');
    this.#setMovingMap(oppositeMovingInput, ' ');
    return false;
  }

  #getOppositeMovingInput(movingInput) {
    if (movingInput === RULE.moveInput.up) return RULE.moveInput.down;

    return RULE.moveInput.up;
  }

  #setMovingMap(key, value) {
    this.#movingMap.set(key, [...this.#movingMap.get(key), value]);
  }

  getCurrentMap() {
    return [
      [...this.#movingMap.get(RULE.moveInput.up)],
      [...this.#movingMap.get(RULE.moveInput.down)],
    ];
  }

  retry() {
    this.#currentPosition = -1;
    this.#tryCount += 1;
    this.#movingMap.set(RULE.moveInput.up, []);
    this.#movingMap.set(RULE.moveInput.down, []);
  }

  get bridgeSize() {
    return this.#bridge.length;
  }

  get tryCount() {
    return this.#tryCount;
  }
}

export default BridgeGame;
