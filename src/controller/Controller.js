import { InputView, OutputView } from '../view/index.js';

class Controller {
  async start() {
    InputView.get();
    OutputView.print();
  }
}

export default Controller;
