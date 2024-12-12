
const isNumber = (bridgeSize) => {
  if (Number.isNaN(bridgeSize)) {
    throw new Error('[ERROR] 숫자가 아닙니다. 다시 입력해 주세요.');
  }
}

const isInteger = (bridgeSize) => {
  if (!Number.isInteger(bridgeSize)) {
    throw new Error('[ERROR] 정수가 아닙니다. 다시 입력해 주세요.');
  }
}

const isInRange = (bridgeSize) => {
  if (bridgeSize < 3 || bridgeSize > 20) {
    throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  }
}

const validateBridgeSize = (bridgeSize) => {
  isNumber(bridgeSize);
  isInteger(bridgeSize);
  isInRange(bridgeSize);
}

export default validateBridgeSize;
