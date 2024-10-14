import { MainMenuCharacterUpdate } from "./world/MainMenuCharacterUpdate";
import { MainState } from "../MainState";
import { WorldCharacterUpdate } from "./world/WorldCharacterUpdate";
import { WorldPartyUpdate } from "./world/WorldPartyUpdate";

export interface InitialMainMenuUpdate {
  readonly mainMenuCharacters: MainMenuCharacterUpdate[];
}
export interface InitialWorldUpdate {
  readonly bootTime: number;
  readonly parties: WorldPartyUpdate[];
  readonly worldCharacterID: string;
  readonly worldCharacters: WorldCharacterUpdate[];
}
export interface InitialUpdate {
  readonly isSubscribed: boolean;
  readonly mainMenu?: InitialMainMenuUpdate;
  readonly mainState: MainState;
  readonly userID: number;
  readonly username: string;
  readonly world?: InitialWorldUpdate;
}
