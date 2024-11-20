import { TilesetTileAnimationFrameDefinition } from "./TilesetTileAnimationFrameDefinition";

export interface TilesetTileDefinition {
  readonly animationFrames: readonly TilesetTileAnimationFrameDefinition[];
  readonly bankID?: string;
  readonly chestID?: string;
  readonly combinationLockID?: string;
  readonly extendsNPC: boolean;
  readonly npcID?: string;
  readonly pianoID?: string;
  readonly reachableID?: string;
}
