import { ERROR_MESSAGES } from '../constants/constants.js';

const isNumber = (bridgeSize) => {
  if (Number.isNaN(bridgeSize)) {
    throw new Error(ERROR_MESSAGES.IS_NOT_NUMBER);
  }
}

const isInteger = (bridgeSize) => {
  if (!Number.isInteger(bridgeSize)) {
    throw new Error(ERROR_MESSAGES.IS_NOT_INTEGER);
  }
}

const isInRange = (bridgeSize) => {
  if (bridgeSize < 3 || bridgeSize > 20) {
    throw new Error(ERROR_MESSAGES.IS_NOT_IN_RANGE);
  }
}

const validateBridgeSize = (bridgeSize) => {
  isNumber(bridgeSize);
  isInteger(bridgeSize);
  isInRange(bridgeSize);
}

export default validateBridgeSize;
