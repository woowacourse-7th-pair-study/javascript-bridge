import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import BridgeMaker from '../src/BridgeMaker.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};
const runException = async (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  mockRandoms([1, 0, 1]);
  mockQuestions([...inputs, '3', 'U', 'D', 'U']);
  const app = new App();

  await app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn(),
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('기능 테스트', async () => {
    // given
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      '다리 건너기 게임을 시작합니다.',
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    expectBridgeOrder(logs, '[ O |   | O ]', '[   | O |   ]');
  });

  test('예외 테스트', () => {
    runException(['a']);
  });
});
