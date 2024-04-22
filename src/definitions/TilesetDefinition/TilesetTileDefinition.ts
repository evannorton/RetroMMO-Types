import { TilesetTileAnimationFrameDefinition } from "./TilesetTileAnimationFrameDefinition";

export interface TilesetTileDefinition {
  readonly animationFrames: TilesetTileAnimationFrameDefinition[];
  readonly bankSlug?: string;
  readonly chestSlug?: string;
  readonly combinationLockSlug?: string;
  readonly collision: boolean;
  readonly coversCollision: boolean;
  readonly extendsNPC: boolean;
  readonly npcSlug?: string;
  readonly reachableSlug?: string;
}
