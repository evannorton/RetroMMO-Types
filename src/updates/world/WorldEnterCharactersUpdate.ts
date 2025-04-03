import { WorldCharacterUpdate } from "./WorldCharacterUpdate";

export interface WorldEnterCharactersUpdate {
  readonly characters: readonly WorldCharacterUpdate[];
}
