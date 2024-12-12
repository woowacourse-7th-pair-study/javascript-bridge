import { ERROR_MESSAGE } from '../constant/message.js';
import { throwWoowaError } from '../util/error.js';
import { RULE } from '../constant/rule.js';

class Validator {
  static validateBridgeSizeInput(input) {
    this.#checkIsNumber(input);
    this.#checkIsInteger(input);
    this.#checkIsInRange(input, RULE.bridgeSize.min, RULE.bridgeSize.max);
  }

  static validateMovingInput(input) {
    this.#checkIsContainMovingInput(
      [RULE.moveInput.down, RULE.moveInput.up],
      input,
    );
  }

  static #checkIsNumber(value) {
    if (Number.isNaN(Number(value))) throwWoowaError(ERROR_MESSAGE.notNumber);
  }

  static #checkIsPositive(value) {
    if (Number(value) <= 0) throwWoowaError(ERROR_MESSAGE.notPositive);
  }

  static #checkIsInteger(value) {
    if (!Number.isInteger(Number(value)))
      throwWoowaError(ERROR_MESSAGE.notInteger);
  }

  static #checkIsInRange(value, min, max) {
    if (value < min || value > max) throwWoowaError(ERROR_MESSAGE.notInRange);
  }

  static #checkIsContainMovingInput(rules, value) {
    if (!rules.includes(value)) throwWoowaError(ERROR_MESSAGE.notInMovingInput);
  }

  static #checkIsContainGameCommand(rules, value) {
    if (!rules.includes(value)) throwWoowaError(ERROR_MESSAGE.notInGameCommand);
  }
}

export default Validator;
