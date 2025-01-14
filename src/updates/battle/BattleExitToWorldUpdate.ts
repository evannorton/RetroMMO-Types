import { WorldCharacterUpdate } from "../world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "../world/WorldNPCUpdate";
import { WorldPartyUpdate } from "../world/WorldPartyUpdate";

export interface BattleExitToWorldUpdate {
  readonly npcs: readonly WorldNPCUpdate[];
  readonly parties: readonly WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacterID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
  readonly x: number;
  readonly y: number;
}
