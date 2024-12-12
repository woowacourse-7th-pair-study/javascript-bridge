import { ERROR_MESSAGE } from '../src/constant/message.js';
import { runException } from './ApplicationTest.js';

const brideSizeInputTestCases = [
  {
    description: '다리 길이 숫자가 아닌 것을 입력',
    inputs: Number('aaa'),
  },
  {
    description: '다리 길이 정수가 아닌 것을 입력',
    inputs: Number('3.4'),
  },
  {
    description: '다리 길이 범위 내의 숫자가 아닌 것을 입력',
    inputs: Number('25'),
  },
];

const movingInputTestCases = [
  {
    description: '이동할 칸 입력이 잘못 됐을 경우',
    inputs: 'DOWN',
  },
  {
    description: '이동할 칸 입력이 잘못 됐을 경우',
    inputs: 'UP',
  },
];

const gameCommandInputTestCases = [
  {
    description: '재시작 입력이 잘못 됐을 경우',
    inputs: 'YES',
    expectedErrorMessage: ERROR_MESSAGE.notInGameCommand,
  },
  {
    description: '재시작 입력이 잘못 됐을 경우',
    inputs: 'NO',
    expectedErrorMessage: ERROR_MESSAGE.notInGameCommand,
  },
];

describe('Validator 클래스 테스트', () => {
  test.each(brideSizeInputTestCases)('$description', ({ inputs }) => {
    runException([inputs]);
  });

  test.each(movingInputTestCases)('$description', ({ inputs }) => {
    runException(['3', inputs]);
  });

  test.each(gameCommandInputTestCases)('$description', ({ inputs }) => {
    runException(['3', 'D', inputs, 'R']);
  });
});
