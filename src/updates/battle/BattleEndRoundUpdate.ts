import { BattleResourcesUpdate } from "./BattleResourcesUpdate";
import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface BattleEndRoundBattlerUpdate {
  readonly id: string;
  readonly resources?: BattleResourcesUpdate;
}
export interface BattleEndRoundUpdate {
  readonly battlers: readonly BattleEndRoundBattlerUpdate[];
  readonly itemInstances: readonly ItemInstanceUpdate[];
}
