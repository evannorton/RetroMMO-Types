import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatExperienceEvent extends CombatEvent {
  readonly amount: number;
  readonly type: CombatEventType.Experience;
  readonly winningTeamIndex: 0 | 1;
}
