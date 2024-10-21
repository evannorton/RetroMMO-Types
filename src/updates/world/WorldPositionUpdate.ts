import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPositionUpdate {
  readonly parties: readonly WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
