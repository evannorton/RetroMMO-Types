import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleInventoryFullEvent extends BattleEvent {
  readonly itemID: string;
  readonly type: BattleEventType.InventoryFull;
  readonly username: string;
}
