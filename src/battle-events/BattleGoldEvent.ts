import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleGoldEvent extends BattleEvent {
  readonly amount: number;
  readonly type: BattleEventType.Gold;
  readonly winningTeamIndex: 0 | 1;
}
