import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatCritEvent extends CombatEvent {
  readonly type: CombatEventType.Crit;
}
