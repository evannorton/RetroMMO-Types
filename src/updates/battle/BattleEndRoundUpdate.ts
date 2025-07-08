import { BattleResourcesUpdate } from "./BattleResourcesUpdate";
import { BattleSelectionUpdate } from "./BattleSelectionUpdate";
import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface BattleEndRoundBattlerUpdate {
  readonly id: string;
  readonly isAlive?: boolean;
  readonly resources?: BattleResourcesUpdate;
}
export interface BattleEndRoundUpdate {
  readonly battlers: readonly BattleEndRoundBattlerUpdate[];
  readonly itemInstances: readonly ItemInstanceUpdate[];
  readonly selection: BattleSelectionUpdate;
}
