import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import BridgeMaker from '../src/BridgeMaker.js';
import mockRandoms from '../src/utils/mockRandoms.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    if (input === undefined) {
      throw new Error('NO INPUT');
    }

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const runException = async (inputs) => {
  // given
  const inputsToTerminate = ['3', 'U', 'D', 'U'];
  mockRandoms([1, 0, 1]);
  mockQuestions([...inputs, ...inputsToTerminate]);
  const logSpy = getLogSpy();
  const app = new App();

  // when
  await app.run();

  // then
  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    // given
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    // when
    const bridge = BridgeMaker.makeBridge(3, mockGenerator);

    // then
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('기능 테스트', async () => {
    // given
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);

    // when
    const app = new App();
    await app.run();

    // then
    const log = getOutput(logSpy);
    expectLogContains(log, [
      '다리 건너기 게임을 시작합니다.',
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('예외 테스트', () => {
    runException(['a']);
  });
});
