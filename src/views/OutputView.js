import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_LABELS, START_MESSAGE } from '../constants/constants.js';

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 문구를 출력한다.
   */
  printStartMessage() {
    Console.print(START_MESSAGE);
  },

  /**
   * 에러 메시지를 출력한다.
   * @param {string} errorMessage 
   */
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * 
   * @param {Array<Array<string>>} userBridge
   */
  printMap(userBridge) {
    userBridge.forEach((eachBridge) => {
      const bridgeLine = eachBridge.join(' | ');
      Console.print(`[ ${bridgeLine} ]`);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {Array<Array<string>>} userBridge
   * @param {boolean} hasTotalX
   * @param {number} tryCount
   */
  printResult(userBridge, hasTotalX, tryCount) {
    let successOrNot = OUTPUT_LABELS.SUCCESS;
    if (hasTotalX) successOrNot = OUTPUT_LABELS.FAILED;

    Console.print(OUTPUT_LABELS.TOTAL_RESULT);
    this.printMap(userBridge);

    Console.print(`\n${OUTPUT_LABELS.SUCCESS_OR_NOT}: ${successOrNot}`);
    Console.print(`${OUTPUT_LABELS.TRY_COUNT}: ${tryCount}`);
  },
};

export default OutputView;
