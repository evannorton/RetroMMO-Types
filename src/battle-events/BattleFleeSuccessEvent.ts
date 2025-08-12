import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleFleeSuccessEvent extends BattleEvent {
  readonly type: BattleEventType.FleeSuccess;
}
