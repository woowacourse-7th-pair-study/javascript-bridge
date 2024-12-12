const ERROR_MESSAGE = require('../constant/error.js');

const validateSize = (size) => {
  if (Number.isNaN(size)) {
    throw new Error(ERROR_MESSAGE.NaN);
  }

  if (!Number.isInteger(size)) {
    throw new Error(ERROR_MESSAGE.integer);
  }

  if (size > 20 || size < 3) {
    throw new Error(ERROR_MESSAGE.range);
  }
};

module.exports = validateSize;
