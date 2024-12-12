import ERROR_MESSAGE from '../constant/error.js';

const validateMove = (moveTo) => {
  if (moveTo !== 'U' && moveTo !== 'D') {
    throw new Error(ERROR_MESSAGE.wrongMove);
  }
};

export default validateMove;
