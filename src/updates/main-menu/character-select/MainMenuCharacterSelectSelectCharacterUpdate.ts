import { ItemInstanceUpdate } from "../../ItemInstanceUpdate";
import { WorldCharacterUpdate } from "../../world/WorldCharacterUpdate";
import { WorldNPCUpdate } from "../../world/WorldNPCUpdate";
import { WorldPartyUpdate } from "../../world/WorldPartyUpdate";

export interface MainMenuCharacterSelectSelectCharacterUpdate {
  readonly agility: number;
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly bodyItemInstance?: ItemInstanceUpdate;
  readonly boostItemInstances: readonly ItemInstanceUpdate[];
  readonly clothesDyeItemInstance?: ItemInstanceUpdate;
  readonly defense: number;
  readonly experienceUntilLevel?: number;
  readonly hairDyeItemInstance?: ItemInstanceUpdate;
  readonly headItemInstance?: ItemInstanceUpdate;
  readonly intelligence: number;
  readonly inventoryGold: number;
  readonly luck: number;
  readonly mainHandItemInstance?: ItemInstanceUpdate;
  readonly maskItemInstance?: ItemInstanceUpdate;
  readonly npcs: readonly WorldNPCUpdate[];
  readonly offHandItemInstance?: ItemInstanceUpdate;
  readonly outfitItemInstance?: ItemInstanceUpdate;
  readonly parties: readonly WorldPartyUpdate[];
  readonly strength: number;
  readonly timePlayed: number;
  readonly wisdom: number;
  readonly worldCharacterID: string;
  readonly worldCharacters: readonly WorldCharacterUpdate[];
}
