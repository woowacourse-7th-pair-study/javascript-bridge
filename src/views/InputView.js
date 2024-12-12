import { Console } from '@woowacourse/mission-utils';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try {
      return Console.readLineAsync('다리의 길이를 입력해주세요.\n');
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    try {
      return Console.readLineAsync('이동할 칸을 선택해주세요. (위: U, 아래: D)\n');
    } catch (error) {
      throw new Error(error.message);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    try {
      return Console.readLineAsync('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n');
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default InputView;
