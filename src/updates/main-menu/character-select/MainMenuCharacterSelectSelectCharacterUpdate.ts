import { ItemInstanceUpdate } from "../../world/ItemInstanceUpdate";
import { WorldCharacterUpdate } from "../../world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "../../world/WorldNPCUpdate";
import { WorldPartyUpdate } from "../../world/WorldPartyUpdate";

export interface MainMenuCharacterSelectSelectCharacterUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly bodyItemInstance?: ItemInstanceUpdate;
  readonly clothesDyeItemInstance?: ItemInstanceUpdate;
  readonly hairDyeItemInstance?: ItemInstanceUpdate;
  readonly headItemInstance?: ItemInstanceUpdate;
  readonly inventoryGold: number;
  readonly mainHandItemInstance?: ItemInstanceUpdate;
  readonly maskItemInstance?: ItemInstanceUpdate;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly offHandItemInstance?: ItemInstanceUpdate;
  readonly outfitItemInstance?: ItemInstanceUpdate;
  readonly parties: readonly WorldPartyUpdate[];
  readonly worldCharacterID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
