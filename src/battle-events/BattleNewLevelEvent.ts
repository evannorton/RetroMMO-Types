import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleNewLevelEvent extends BattleEvent {
  readonly level: number;
  readonly type: BattleEventType.NewLevel;
  readonly username: string;
}
