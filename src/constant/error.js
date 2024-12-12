const ERROR_MESSAGE = Object.freeze({
  NaN: '[ERROR]: 다리 길이는 숫자로 입력해 주세요.',
  integer: '[ERROR]: 정수의 값을 입력해 수제요.',
  range: '[ERROR]: 3이상 20이하의 값을 입력해 주세요.',
  wrongMove: '[ERROR]: 이동 입력은 U, D중에서만 입력할 수 있습니다.',
  wrongCommand: '[ERROR]: 재시도 종료 여부는 R, Q만 입력할 수 있습니다.',
});

export default ERROR_MESSAGE;
