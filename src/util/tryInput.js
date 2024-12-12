import OutputView from '../view/OutputView.js';

const tryInput = async (inputFn) => {
  try {
    return await inputFn();
  } catch (e) {
    OutputView.printError(e.message);
    return await tryInput(() => inputFn());
  }
};
export default tryInput;
