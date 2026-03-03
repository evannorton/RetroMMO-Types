import { CombatEvent } from "../../combat-events/CombatEvent";
import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldCombatRoundUpdate {
  readonly duration: number;
  readonly events: readonly CombatEvent[];
  readonly serverTime: number;
}
export interface WorldCombatUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly boostItemInstances: readonly ItemInstanceUpdate[];
  readonly round: WorldCombatRoundUpdate;
}
