import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleApproachEvent extends BattleEvent {
  readonly enemyCount: number;
  readonly type: BattleEventType.Approach;
}
