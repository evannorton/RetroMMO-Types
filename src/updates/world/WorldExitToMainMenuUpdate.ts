import { MainMenuCharacterUpdate } from "../main-menu/MainMenuCharacterUpdate";

export interface WorldExitToMainMenuUpdate {
  readonly characters: readonly MainMenuCharacterUpdate[];
}
