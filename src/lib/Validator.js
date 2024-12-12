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
    this.#checkIsInputContainRules(
      [RULE.moveInput.down, RULE.moveInput.up],
      input,
      ERROR_MESSAGE.notInMovingInput,
    );
  }

  static validateGameCommandInput(input) {
    this.#checkIsInputContainRules(
      [RULE.restartInput.restart, RULE.restartInput.end],
      input,
      ERROR_MESSAGE.notInGameCommand,
    );
  }

  static #checkIsNumber(value) {
    if (Number.isNaN(Number(value))) throwWoowaError(ERROR_MESSAGE.notNumber);
  }

  static #checkIsInteger(value) {
    if (!Number.isInteger(Number(value)))
      throwWoowaError(ERROR_MESSAGE.notInteger);
  }

  static #checkIsInRange(value, min, max) {
    if (value < min || value > max) throwWoowaError(ERROR_MESSAGE.notInRange);
  }

  static #checkIsInputContainRules(rules, value, errorMessage) {
    if (!rules.includes(value)) throwWoowaError(errorMessage);
  }
}

export default Validator;
