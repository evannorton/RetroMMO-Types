import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldEnterCharactersUpdate {
  readonly parties: WorldPartyUpdate[];
  readonly worldCharacters: WorldCharacterUpdate[];
}
