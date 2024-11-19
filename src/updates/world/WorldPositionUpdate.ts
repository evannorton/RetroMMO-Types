import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldNPCUpdate } from "./WorldNPCUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPositionUpdate {
  readonly npcs: readonly WorldNPCUpdate[];
  readonly parties: readonly WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
