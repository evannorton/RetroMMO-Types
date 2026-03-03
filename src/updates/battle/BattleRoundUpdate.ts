import { CombatEvent } from "../../combat-events/CombatEvent";

export interface BattleRoundUpdate {
  readonly duration: number;
  readonly events: readonly CombatEvent[];
  readonly isFinal?: boolean;
  readonly serverTime: number;
}
