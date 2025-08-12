import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleAmbushEvent extends BattleEvent {
  readonly teamIndex: 0 | 1;
  readonly type: BattleEventType.Ambush;
}
