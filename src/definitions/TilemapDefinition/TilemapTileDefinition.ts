export interface TilemapTileDefinition {
  readonly aboveIndices: number[];
  bankIndex?: number;
  readonly belowIndices: number[];
  chestIndex?: number;
  combinationLockIndex?: number;
  npcIndex?: number;
  reachableIndex?: number;
}
