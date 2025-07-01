import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleDefeatEvent extends BattleEvent {
  readonly type: BattleEventType.Defeat;
  readonly winningTeamIndex: 0 | 1;
}
