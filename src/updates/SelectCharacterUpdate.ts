import { CharacterUpdate } from "./CharacterUpdate";

export interface SelectCharacterUpdate {
  readonly characterID: string;
  characters: CharacterUpdate[];
}
