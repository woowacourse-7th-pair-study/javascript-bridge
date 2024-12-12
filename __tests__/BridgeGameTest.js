import BridgeGame from '../src/BridgeGame.js';
import { mockRandoms } from './ApplicationTest.js';

describe('BridgeGame 클래스 테스트', () => {
  test('move 메서드 테스트', () => {
    mockRandoms([1, 0, 1, 1, 0]);

    const bridgeGame = new BridgeGame(5);

    expect(bridgeGame.move('U')).toBe(true);
    expect(bridgeGame.move('U')).toBe(false);
    expect(bridgeGame.move('U')).toBe(true);
    expect(bridgeGame.move('U')).toBe(true);
    expect(bridgeGame.move('U')).toBe(false);
  });

  test('getCurrentMap 메서드 테스트', () => {
    mockRandoms([1, 0, 1, 1, 0]);

    const bridgeGame = new BridgeGame(5);

    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');

    expect(bridgeGame.getCurrentMap()).toEqual([
      ['O', ' ', 'O', 'O', ' '],
      [' ', 'O', ' ', ' ', 'O'],
    ]);
  });

  test('retry 메서드 테스트', () => {
    mockRandoms([1, 0, 1, 1, 0]);

    const bridgeGame = new BridgeGame(5);

    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');

    bridgeGame.retry();
    bridgeGame.retry();

    expect(bridgeGame.bridgeSize).toEqual(5);
    expect(bridgeGame.tryCount).toEqual(3);
  });
});
