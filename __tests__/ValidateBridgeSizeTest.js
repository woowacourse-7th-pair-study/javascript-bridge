import parser from '../src/utils/parser.js';
import validateBridgeSize from '../src/validations/validateBridgeSize.js';

describe('validateBridgeSize 메서드 테스트', () => {
  test.each([
    ['숫자가 아닌 경우', '안녕', '[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.'],
    ['정수가 아닌 경우', '3.3', '[ERROR] 정수가 아닙니다. 다시 입력해 주세요.'],
    ['범위가 올바르지 않은 경우 (1)', '2', '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.'],
    ['범위가 올바르지 않은 경우 (2)', '21', '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.'],
  ])('%s', (_, input, expectedErrorMessage) => {
    // given
    const parsedInput = parser.stringToNumber(input);

    // when & then
    expect(() => validateBridgeSize(parsedInput)).toThrow(expectedErrorMessage);
  });

  test.each([ 
    '3', '4', '20' 
  ])('입력이 올바른 경우 에러가 발생하지 않는다.', (input) => {
    // given
    const parsedInput = parser.stringToNumber(input);

    // when & then
    expect(() => validateBridgeSize(parsedInput)).not.toThrow();
  });
});
