import ERROR_MESSAGE from '../constant/error.js';

const validateCommand = (command) => {
  if (command !== 'R' && command !== 'Q') {
    throw new Error(ERROR_MESSAGE.wrongCommand);
  }
};

export default validateCommand;
