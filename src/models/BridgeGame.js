import BridgeMaker from '../BridgeMaker.js';
import BridgeRandomNumberGenerator from '../utils/BridgeRandomNumberGenerator.js';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {Array<string>} 다리 길이에 맞게 무작위 값을 통해 생성한 다리 정보 */ #bridge;
  /** @type {Array<string>} 사용자가 이동한 다리 위치 정보 */ #userBridge = [];

  constructor (size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {

  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {

  }
}

export default BridgeGame;
