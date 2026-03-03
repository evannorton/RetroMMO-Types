import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatFleeSuccessEvent extends CombatEvent {
  readonly type: CombatEventType.FleeSuccess;
}
