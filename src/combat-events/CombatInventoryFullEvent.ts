import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatInventoryFullEvent extends CombatEvent {
  readonly itemID: string;
  readonly type: CombatEventType.InventoryFull;
  readonly username: string;
}
