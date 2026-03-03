import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";

export interface CombatGoldEvent extends CombatEvent {
  readonly amount: number;
  readonly type: CombatEventType.Gold;
  readonly winningTeamIndex: 0 | 1;
}
