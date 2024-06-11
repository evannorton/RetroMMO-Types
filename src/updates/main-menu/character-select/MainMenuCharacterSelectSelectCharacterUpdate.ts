import { WorldCharacterUpdate } from "../../world/WorldCharacterUpdate";

export interface MainMenuCharacterSelectSelectCharacterUpdate {
  readonly characterID: string;
  readonly characters: WorldCharacterUpdate[];
}
