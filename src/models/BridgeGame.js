import BridgeMaker from '../BridgeMaker.js';
import { CAN_MOVE, CANNOT_MOVE, DO_NOT_SELECT, DOWN, UP } from '../constants/constants.js';
import BridgeRandomNumberGenerator from '../utils/BridgeRandomNumberGenerator.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {Array<string>} 다리 길이에 맞게 무작위 값을 통해 생성한 다리 정보 */ #bridge;
  /** @type {Array<Array<string>>} 사용자가 이동한 다리 정보 2차원 배열 */ #userBridge;
  /** @type {number} 시도 횟수 */ #tryCount = 1;

  constructor (size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#userBridge = Array.from(Array(2), () => new Array()); // [ [], [] ] 로 초기화
  }

  getUserBridge() {
    return this.#userBridge;
  }

  getTryCount() {
    return this.#tryCount;
  }

  /**
   * 지금까지 사용자가 선택한 전체 칸에서 'X'가 포함되어 있는지 확인
   * @returns {boolean}
   */
  checkTotalCannotMove() {
    return this.#userBridge.some((eachBridge) => {
      return eachBridge.includes(CANNOT_MOVE);
    });
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {number} count // 현재 다리 위치
   * @param {string} moving // U 또는 D
   */
  move(count, moving) {
    if (moving === UP) {
      if (this.#bridge[count] === moving) this.#userBridge[0].push(CAN_MOVE); // 위 칸에 'O' 처리
      else this.#userBridge[0].push(CANNOT_MOVE); // 위 칸에 'X' 처리
      this.#userBridge[1].push(DO_NOT_SELECT); // 선택하지 않은 아래 칸에 공백
    }
    if (moving === DOWN) {
      if (this.#bridge[count] === moving) this.#userBridge[1].push(CAN_MOVE); // 아래 칸에 'O' 처리
      else this.#userBridge[1].push(CANNOT_MOVE); // 아래 칸에 'X' 처리
      this.#userBridge[0].push(DO_NOT_SELECT); // 선택하지 않은 위 칸에 공백
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#userBridge = Array.from(Array(2), () => new Array());
    this.#tryCount += 1;
  }
}

export default BridgeGame;
