// 다시 입력을 받을 경우
export const throwWoowaError = (message) => {
  throw new Error(`[ERROR] ${message} 다시 입력해주세요.`);
};