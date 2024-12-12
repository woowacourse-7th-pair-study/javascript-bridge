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
});
