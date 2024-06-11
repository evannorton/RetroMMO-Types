import { WorldCharacterUpdate } from "./WorldCharacterUpdate";

export interface WorldPositionUpdate {
  readonly characters: WorldCharacterUpdate[];
  readonly tilemapID: string;
  readonly x: number;
  readonly y: number;
}
