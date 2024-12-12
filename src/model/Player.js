class Player {
  #position;

  constructor() {
    this.#position = Array.from({ length: 2 }, () => Array.from([]));
  }

  updatePosition(result, position) {
    if (position === 'U') {
      this.#position[0].push(result);
      this.#position[1].push(' ');
      return;
    }

    this.#position[0].push(' ');
    this.#position[1].push(result);
  }

  getPosition() {
    return this.#position;
  }

  retry() {
    this.#position = Array.from({ length: 2 }, () => Array.from([]));
  }
}

export default Player;
