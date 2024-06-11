import { WorldCharacterUpdate } from "../world/WorldCharacterUpdate";

export interface BattleExitToWorldUpdate {
  readonly characterID: string;
  readonly characters: WorldCharacterUpdate[];
  readonly tilemapID: string;
  readonly x: number;
  readonly y: number;
}
