import { MainMenuCharacterUpdate } from "../main-menu/MainMenuCharacterUpdate";

export interface WorldExitToMainMenuUpdate {
  readonly mainMenuCharacters: readonly MainMenuCharacterUpdate[];
}
