import { WorldCharacterUpdate } from "./WorldCharacterUpdate";

export interface WorldEnterCharactersUpdate {
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
