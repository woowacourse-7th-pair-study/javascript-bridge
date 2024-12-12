import { ERROR_MESSAGES, GAME_COMMAND_RESPONSE, MOVING_RESPONSE } from '../src/constants/constants.js';
import validateUserResponse from '../src/validations/validateUserResponse.js';

describe('validateUserResponse 메서드 테스트', () => {
  test.each([
    // given
    ['A', MOVING_RESPONSE, ERROR_MESSAGES.INVALID_INPUT],
    ['R', MOVING_RESPONSE, ERROR_MESSAGES.INVALID_INPUT],
    ['U', GAME_COMMAND_RESPONSE, ERROR_MESSAGES.INVALID_INPUT],
    ['D', GAME_COMMAND_RESPONSE, ERROR_MESSAGES.INVALID_INPUT],
  ])('입력이 올바르지 않은 경우 에러가 발생한다.', (input, expectedArray, expectedErrorMessage) => {
    // when & then
    expect(() => validateUserResponse(input, expectedArray)).toThrow(expectedErrorMessage);
  });

  test.each([ 
    // given
    [ 'U', MOVING_RESPONSE ],
    [ 'D', MOVING_RESPONSE ],
    [ 'R', GAME_COMMAND_RESPONSE ],
    [ 'Q', GAME_COMMAND_RESPONSE ],
  ])('입력이 올바른 경우 에러가 발생하지 않는다.', (input, expectedArray) => {
    // when & then
    expect(() => validateUserResponse(input, expectedArray)).not.toThrow();
  });
});
