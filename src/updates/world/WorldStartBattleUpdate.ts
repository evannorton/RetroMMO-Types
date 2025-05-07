import { BattleCharacterUpdate } from "../battle/BattleCharacterUpdate";
import { BattlerUpdate } from "../battle/BattlerUpdate";
import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldStartBattleUpdate {
  readonly battlerID: string;
  readonly battlers: BattlerUpdate[];
  readonly characters: BattleCharacterUpdate[];
  readonly enemyBattlerIDs: readonly string[];
  readonly friendlyBattlerIDs: readonly string[];
  readonly itemInstances: readonly ItemInstanceUpdate[];
  readonly reachableID: string;
}
