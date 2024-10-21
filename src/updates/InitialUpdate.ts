import { MainMenuCharacterUpdate } from "./main-menu/MainMenuCharacterUpdate";
import { MainState } from "../MainState";
import { WorldCharacterUpdate } from "./world/WorldCharacterUpdate";
import { WorldPartyUpdate } from "./world/WorldPartyUpdate";

export interface InitialMainMenuUpdate {
  readonly mainMenuCharacters: readonly MainMenuCharacterUpdate[];
}
export interface InitialWorldUpdate {
  readonly parties: readonly WorldPartyUpdate[];
  readonly worldCharacterID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
export interface InitialUpdate {
  readonly isSubscribed: boolean;
  readonly mainMenu?: InitialMainMenuUpdate;
  readonly mainState: MainState;
  readonly userID: number;
  readonly username: string;
  readonly world?: InitialWorldUpdate;
}
