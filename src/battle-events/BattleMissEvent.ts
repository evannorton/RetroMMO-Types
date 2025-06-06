import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleMissEvent extends BattleEvent {
  readonly type: BattleEventType.Miss;
}
