import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatNewLevelEvent extends CombatEvent {
  readonly level: number;
  readonly type: CombatEventType.NewLevel;
  readonly username: string;
}
