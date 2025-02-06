import { ItemInstanceUpdate } from "./world/ItemInstanceUpdate";
import { MainMenuCharacterUpdate } from "./main-menu/MainMenuCharacterUpdate";
import { MainState } from "../MainState";
import { WorldCharacterUpdate } from "./world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "./world/WorldNPCUpdate";
import { WorldPartyUpdate } from "./world/WorldPartyUpdate";

export interface InitialMainMenuUpdate {
  readonly mainMenuCharacters: readonly MainMenuCharacterUpdate[];
}
export interface InitialWorldUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly npcs: readonly WorldNPCUpdate[];
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
