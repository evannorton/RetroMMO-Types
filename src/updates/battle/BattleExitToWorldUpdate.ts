import { WorldCharacterUpdate } from "../world/WorldCharacterUpdate";
import { WorldPartyUpdate } from "../world/WorldPartyUpdate";

export interface BattleExitToWorldUpdate {
  readonly parties: readonly WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacterID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
  readonly x: number;
  readonly y: number;
}
