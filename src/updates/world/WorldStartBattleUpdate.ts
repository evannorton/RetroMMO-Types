import { BattleCharacterUpdate } from "../battle/BattleCharacterUpdate";
import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldStartBattleUpdate {
  readonly battleCharacterID: string;
  readonly characters: BattleCharacterUpdate[];
  readonly enemyCharacterIDs: readonly string[];
  readonly friendlyCharacterIDs: readonly string[];
  readonly itemInstances: readonly ItemInstanceUpdate[];
  readonly reachableID: string;
}
