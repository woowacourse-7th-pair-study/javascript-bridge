import { Console } from '@woowacourse/mission-utils';

import OUTPUT_MESSAGE from '../constant/output.js';

const OutputView = {
  printGreet() {
    Console.print(OUTPUT_MESSAGE.greet);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printMap(playerPosition) {
    playerPosition.forEach((position) => {
      Console.print(`[ ${position.join(' | ')} ]`);
    });
  },

  printResult(playerPosition, result) {
    Console.print('\n최종 게임 결과');
    this.printMap(playerPosition);

    Console.print(`\n게임 성공 여부: ${result.clear}`);
    Console.print(`총 시도한 횟수: ${result.round}`);
  },
};

export default OutputView;
