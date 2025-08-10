import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleDropEvent extends BattleEvent {
  readonly type: BattleEventType.Drop;
  readonly username: string;
}
