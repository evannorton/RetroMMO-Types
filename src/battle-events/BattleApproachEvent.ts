import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleApproachEvent extends BattleEvent {
  readonly type: BattleEventType.Approach;
}
