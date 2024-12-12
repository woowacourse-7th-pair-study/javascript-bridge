import { CONSOLE_MESSAGE } from './constant/message.js';
import { repeatUtilComplete } from './util/input.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return repeatUtilComplete(CONSOLE_MESSAGE.bridgeSizeInput);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return repeatUtilComplete(CONSOLE_MESSAGE.movingInput);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return repeatUtilComplete(CONSOLE_MESSAGE.gameCommandInput);
  },
};

export default InputView;
