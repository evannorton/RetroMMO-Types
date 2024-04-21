import { TilesetTileAnimationFrameDefinition } from "./TilesetTileAnimationFrameDefinition";

export interface TilesetTileDefinition {
  readonly animationFrames: TilesetTileAnimationFrameDefinition[];
  readonly bankSlug: string | null;
  readonly chestSlug: string | null;
  readonly combinationLockSlug: string | null;
  readonly collision: boolean;
  readonly coversCollision: boolean;
  readonly extendsNPC: boolean;
  readonly npcSlug: string | null;
  readonly reachableSlug: string | null;
}
