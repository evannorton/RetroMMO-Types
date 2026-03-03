import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatMissEvent extends CombatEvent {
  readonly type: CombatEventType.Miss;
}
