import { TilesetTileAnimationFrameDefinition } from "./TilesetTileAnimationFrameDefinition";

export interface TilesetTileDefinition {
  readonly animationFrames: TilesetTileAnimationFrameDefinition[];
  readonly bankID?: string;
  readonly chestID?: string;
  readonly combinationLockID?: string;
  readonly collision: boolean;
  readonly coversCollision: boolean;
  readonly extendsNPC: boolean;
  readonly npcID?: string;
  readonly reachableID?: string;
}
