import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatFleeFailureEvent extends CombatEvent {
  readonly type: CombatEventType.FleeFailure;
}
