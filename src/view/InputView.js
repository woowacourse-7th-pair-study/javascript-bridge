import { Console } from '@woowacourse/mission-utils';

import INPUT_MESSAGE from '../constant/input.js';

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.size);

    return Number(input);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.move);

    return input;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.retry);

    return input;
  },
};

export default InputView;
