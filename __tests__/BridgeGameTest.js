import BridgeGame from '../src/models/BridgeGame.js';
import { mockRandoms } from '../src/utils/testUtils.js';

describe('BridgeGame 클래스 테스트', () => {
  let bridgeGame;
  const bridgeSize = 3;
  
  beforeEach(() => {
    mockRandoms([1, 0, 1]);
    bridgeGame = new BridgeGame(bridgeSize);
  });

  test('move() 메서드 테스트', () => {
    // given
    const moving = [ 'U', 'D', 'D' ];
    const expectBridge = [ [ 'O', ' ', ' ' ], [ ' ', 'O', 'X' ] ];

    // when
    for (let count = 0; count < bridgeSize; count++) {
      bridgeGame.move(count, moving[count]);
    }
    // then
    expect(bridgeGame.getUserBridge()).toEqual(expectBridge);
  });

  test('retry() 메서드 테스트', () => {
    // given
    // when
    bridgeGame.retry();

    // then
    expect(bridgeGame.getUserBridge()).toEqual([ [], [] ]);
    expect(bridgeGame.getTryCount()).toBe(2);
  });

  test.each([
    [`'X'가 존재하여 true를 반환하는 경우`, [ 'U', 'D', 'D' ], true],
    [`'X'가 존재하지 않아 false를 반환하는 경우`, [ 'U', 'D', 'U' ], false ],
  ])('checkTotalCannotMove() 메서드 테스트: %s', (_, moving, expectedResponse) => {
    // given
    for (let count = 0; count < bridgeSize; count++) {
      bridgeGame.move(count, moving[count]);
    }

    // when
    const hasTotalX = bridgeGame.checkTotalCannotMove();

    // then
    expect(hasTotalX).toBe(expectedResponse);
  });
});
