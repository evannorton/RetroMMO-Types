import { WorldCharacterUpdate } from "../world/WorldCharacterUpdate";
import { WorldPartyUpdate } from "../world/WorldPartyUpdate";

export interface BattleExitToWorldUpdate {
  readonly parties: WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacterID: string;
  readonly worldCharacters: WorldCharacterUpdate[];
  readonly x: number;
  readonly y: number;
}
