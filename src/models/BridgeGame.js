import BridgeMaker from '../BridgeMaker.js';
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

  /**
   * 사용자가 선택한 칸이 이동할 수 없는 칸인지 확인
   * 현재 다리 위치에 'X'가 포함되어 있는지 확인
   * @param {number} count // 현재 다리 위치
   * @returns {boolean}
   */
  checkCannotMove(count) {
    return this.#userBridge[0][count] === 'X' || this.#userBridge[1][count] === 'X';
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {number} count // 현재 다리 위치
   * @param {string} moving // U 또는 D
   */
  move(count, moving) {
    if (moving === 'U') {
      if (this.#bridge[count] === moving) this.#userBridge[0].push('X'); // 위 칸에 'X' 처리
      else this.#userBridge[0].push('O'); // 위 칸에 'O' 처리
      this.#userBridge[1].push(' '); // 선택하지 않은 아래 칸에 공백
    }
    if (moving === 'D') {
      if (this.#bridge[count] === moving) this.#userBridge[1].push('X'); // 아래 칸에 'X' 처리
      else this.#userBridge[1].push('O'); // 아래 칸에 'O' 처리
      this.#userBridge[0].push(' '); // 선택하지 않은 위 칸에 공백
    }
    // console.log(this.#userBridge);
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
