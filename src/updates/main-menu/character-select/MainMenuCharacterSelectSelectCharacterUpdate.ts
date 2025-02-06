import { ItemInstanceUpdate } from "../../world/ItemInstanceUpdate";
import { WorldCharacterUpdate } from "../../world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "../../world/WorldNPCUpdate";
import { WorldPartyUpdate } from "../../world/WorldPartyUpdate";

export interface MainMenuCharacterSelectSelectCharacterUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly npcs: readonly WorldNPCUpdate[];
  readonly parties: readonly WorldPartyUpdate[];
  readonly worldCharacterID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
