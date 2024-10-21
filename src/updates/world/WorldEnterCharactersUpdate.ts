import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldEnterCharactersUpdate {
  readonly parties: readonly WorldPartyUpdate[];
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
