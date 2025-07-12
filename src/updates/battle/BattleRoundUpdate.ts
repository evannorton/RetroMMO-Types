import { BattleEvent } from "../../battle-events/BattleEvent";

export interface BattleRoundUpdate {
  readonly duration: number;
  readonly events: readonly BattleEvent[];
  readonly isFinal?: boolean;
  readonly serverTime: number;
}
