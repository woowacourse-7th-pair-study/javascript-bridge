export const START_MESSAGE = '다리 건너기 게임을 시작합니다.\n';

export const CANNOT_MOVE = 'X';
export const CAN_MOVE = 'O';
export const DO_NOT_SELECT = ' ';

export const UP = 'U';
export const DOWN = 'D';
export const RETRY = 'R';
export const QUIT = 'Q';

export const MOVING_RESPONSE = Object.freeze([ UP, DOWN ]);
export const GAME_COMMAND_RESPONSE = Object.freeze([ RETRY, QUIT ]);

export const ERROR_MESSAGES = Object.freeze({
  IS_NOT_NUMBER: '[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.',
  IS_NOT_INTEGER: '[ERROR] 정수가 아닙니다. 다시 입력해 주세요.',
  IS_NOT_IN_RANGE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  INVALID_INPUT: '[ERROR] 입력이 올바르지 않습니다. 다시 입력해 주세요.',
});

export const INPUT_MESSAGES = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

export const OUTPUT_LABELS = Object.freeze({
  SUCCESS: '성공',
  FAILED: '실패',
  TOTAL_RESULT: '최종 게임 결과',
  SUCCESS_OR_NOT: '게임 성공 여부',
  TRY_COUNT: '총 시도한 횟수',
});
