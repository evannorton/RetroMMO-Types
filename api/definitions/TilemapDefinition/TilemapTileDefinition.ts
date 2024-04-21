export interface TilemapTileDefinition {
  readonly aboveIndices: number[];
  bankIndex: number | null;
  readonly belowIndices: number[];
  chestIndex: number | null;
  combinationLockIndex: number | null;
  npcIndex: number | null;
  reachableIndex: number | null;
}
