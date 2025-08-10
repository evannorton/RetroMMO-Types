import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleObtainEvent extends BattleEvent {
  readonly itemID: string;
  readonly type: BattleEventType.Obtain;
  readonly username: string;
}
