import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatApproachEvent extends CombatEvent {
  readonly type: CombatEventType.Approach;
}
