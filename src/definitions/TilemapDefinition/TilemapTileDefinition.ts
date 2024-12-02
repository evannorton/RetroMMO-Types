export interface TilemapTileDefinition {
  aboveIndices: readonly number[];
  bankIndex?: number;
  belowIndices: readonly number[];
  chestIndex?: number;
  combinationLockIndex?: number;
  enterableIndex?: number;
  npcIndex?: number;
  pianoIndex?: number;
  reachableIndex?: number;
}
