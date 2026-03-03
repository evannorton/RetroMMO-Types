import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatDefeatEvent extends CombatEvent {
  readonly type: CombatEventType.Defeat;
  readonly wasFled: boolean;
  readonly winningTeamIndex: 0 | 1;
}
