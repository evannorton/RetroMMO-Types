import { WorldCharacterUpdate } from "../../world/WorldCharacterUpdate";
import { WorldPartyUpdate } from "../../world/WorldPartyUpdate";

export interface MainMenuCharacterSelectSelectCharacterUpdate {
  readonly parties: WorldPartyUpdate[];
  readonly worldCharacterID: string;
  readonly worldCharacters: WorldCharacterUpdate[];
}
