import { BattleCharacterUpdate } from "../battle/BattleCharacterUpdate";

export interface WorldStartBattleUpdate {
  readonly battleCharacterID: string;
  readonly characters: BattleCharacterUpdate[];
  readonly enemyCharacterIDs: readonly string[];
  readonly friendlyCharacterIDs: readonly string[];
  readonly reachableID: string;
}
