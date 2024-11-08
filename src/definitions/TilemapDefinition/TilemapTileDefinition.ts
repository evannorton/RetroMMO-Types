export interface TilemapTileDefinition {
  aboveIndices: readonly number[];
  bankIndex?: number;
  belowIndices: readonly number[];
  chestIndex?: number;
  combinationLockIndex?: number;
  npcIndex?: number;
  reachableIndex?: number;
}
