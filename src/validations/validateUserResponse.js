import { ERROR_MESSAGES } from '../constants/constants.js';

const validateUserResponse = (input, expectedArray) => {
  if (!expectedArray.includes(input)) {
    throw new Error(ERROR_MESSAGES.INVALID_INPUT);
  }
}

export default validateUserResponse;
