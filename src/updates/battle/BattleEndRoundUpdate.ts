import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface BattleEndRoundUpdate {
  readonly itemInstances: readonly ItemInstanceUpdate[];
}
