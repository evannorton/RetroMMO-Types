import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleFriendlyTargetFailureEventTarget {
  readonly battlerID: string;
  readonly name: string;
}
export interface BattleFriendlyTargetFailureEvent extends BattleEvent {
  readonly target: BattleFriendlyTargetFailureEventTarget;
  readonly type: BattleEventType.FriendlyTargetFailure;
}
