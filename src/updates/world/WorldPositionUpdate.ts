import { ItemInstanceUpdate } from "./ItemInstanceUpdate";
import { WorldCharacterUpdate } from "./WorldCharacterUpdate";
import { WorldNPCUpdate } from "./WorldNPCUpdate";
import { WorldPartyUpdate } from "./WorldPartyUpdate";

export interface WorldPositionUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly bodyItemInstance?: ItemInstanceUpdate;
  readonly clothesDyeItemInstance?: ItemInstanceUpdate;
  readonly hairDyeItemInstance?: ItemInstanceUpdate;
  readonly headItemInstance?: ItemInstanceUpdate;
  readonly mainHandItemInstance?: ItemInstanceUpdate;
  readonly maskItemInstance?: ItemInstanceUpdate;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly offHandItemInstance?: ItemInstanceUpdate;
  readonly outfitItemInstance?: ItemInstanceUpdate;
  readonly parties: readonly WorldPartyUpdate[];
  readonly tilemapID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
