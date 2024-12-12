
const validateUserResponse = (input, expectedArray) => {
  if (!expectedArray.includes(input)) {
    throw new Error('[ERROR] 입력이 올바르지 않습니다. 다시 입력해 주세요.');
  }
}

export default validateUserResponse;
