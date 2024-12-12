import { RULE } from './rule.js';

export const CONSOLE_MESSAGE = Object.freeze({
  startMessage: '다리 건너기 게임을 시작합니다.',
  resultMessage: '최종 게임 결과',
  successMessage: '게임 성공 여부:',
  tryCountMessage: '총 시도한 횟수:',
  bridgeSizeInput: '다리의 길이를 입력해주세요.\n',
  movingInput: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  gameCommandInput:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

export const ERROR_MESSAGE = Object.freeze({
  notNumber: '다리 길이는 숫자로 입력해야 합니다.',
  notInteger: '다리 길이는 정수로 입력해야 합니다.',
  notInRange: `다리 길이는 ${RULE.bridgeSize.min} ~ ${RULE.bridgeSize.max} 사이로 입력해야 합니다.`,
  notInMovingInput: `이동할 칸은 ${RULE.moveInput.up}, ${RULE.moveInput.down} 중 하나여야 합니다.`,
  notInGameCommand: `게임을 다시 시도할지 여부는 ${RULE.restartInput.restart}, ${RULE.restartInput.end} 중 하나여야 합니다.`,
});
