import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatDropEvent extends CombatEvent {
  readonly type: CombatEventType.Drop;
  readonly username: string;
}
