import { BattleEvent } from "../../battle-events/BattleEvent";

export interface BattleRoundUpdate {
  readonly events: readonly BattleEvent[];
  readonly serverTime: number;
}
