import { BattleEvent } from "./BattleEvent";
import { BattleEventType } from "./BattleEventType";

export interface BattleExperienceEvent extends BattleEvent {
  readonly amount: number;
  readonly type: BattleEventType.Experience;
  readonly winningTeamIndex: 0 | 1;
}
