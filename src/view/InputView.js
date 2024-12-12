const { Console } = require('@woowacourse/mission-utils');

const INPUT_MESSAGE = require('../constant/input.js');
const validateSize = require('../util/validateSize.js');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.size, (input) => {
      try {
        const size = Number(input);
        validateSize(size);
        callback(size);
      } catch (e) {
        Console.print(e.message);
        this.readBridgeSize(callback);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
