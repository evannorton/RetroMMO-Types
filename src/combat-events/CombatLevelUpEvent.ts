import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatLevelUpEvent extends CombatEvent {
  readonly amount: number;
  readonly type: CombatEventType.LevelUp;
  readonly username: string;
}
