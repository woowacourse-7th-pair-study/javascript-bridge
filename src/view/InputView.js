import { repeatUtilComplete } from '../util/input.js';

class InputView {
  static getInput() {
    return repeatUtilComplete('입력해주세요.\n');
  }
}

export default InputView;
