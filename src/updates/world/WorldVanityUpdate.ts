import { ItemInstanceUpdate } from "./ItemInstanceUpdate";
import { VanitySlot } from "../../VanitySlot";

export interface WorldVanityItemsUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly bodyItemInstance?: ItemInstanceUpdate;
  readonly clothesDyeItemInstance?: ItemInstanceUpdate;
  readonly hairDyeItemInstance?: ItemInstanceUpdate;
  readonly headItemInstance?: ItemInstanceUpdate;
  readonly mainHandItemInstance?: ItemInstanceUpdate;
  readonly maskItemInstance?: ItemInstanceUpdate;
  readonly offHandItemInstance?: ItemInstanceUpdate;
  readonly outfitItemInstance?: ItemInstanceUpdate;
}
export interface WorldVanityUpdate {
  readonly items?: WorldVanityItemsUpdate;
  readonly slot: VanitySlot;
  readonly vanityItemID?: string;
  readonly worldCharacterID: string;
}
