import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleCritEvent extends BattleEvent {
  readonly type: BattleEventType.Crit;
}
