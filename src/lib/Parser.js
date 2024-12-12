class Parser {
  static splitInputWithSeparator(input, separator) {
    return input.split(separator).map((item) => item.trim());
  }

  static stringToNumber(input) {
    return Number(input);
  }
}

export default Parser;
