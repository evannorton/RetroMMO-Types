import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleFleeFailureEvent extends BattleEvent {
  readonly type: BattleEventType.FleeFailure;
}
