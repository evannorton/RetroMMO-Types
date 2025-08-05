import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleLevelUpEvent extends BattleEvent {
  readonly amount: number;
  readonly type: BattleEventType.LevelUp;
  readonly username: string;
}
