import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/constants.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try {
      return Console.readLineAsync(INPUT_MESSAGES.BRIDGE_SIZE);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    try {
      return Console.readLineAsync(INPUT_MESSAGES.MOVING);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    try {
      return Console.readLineAsync(INPUT_MESSAGES.GAME_COMMAND);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default InputView;
