import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatObtainEvent extends CombatEvent {
  readonly itemID: string;
  readonly type: CombatEventType.Obtain;
  readonly username: string;
}
