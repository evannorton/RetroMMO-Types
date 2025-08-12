import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleDefeatEvent extends BattleEvent {
  readonly type: BattleEventType.Defeat;
  readonly wasFled: boolean;
  readonly winningTeamIndex: 0 | 1;
}
