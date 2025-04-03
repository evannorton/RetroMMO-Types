import { ItemInstanceUpdate } from "../ItemInstanceUpdate";
import { VanitySlot } from "../../VanitySlot";

export interface WorldVanityItemsUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly clothesDyeItemInstance?: ItemInstanceUpdate;
  readonly hairDyeItemInstance?: ItemInstanceUpdate;
  readonly maskItemInstance?: ItemInstanceUpdate;
  readonly outfitItemInstance?: ItemInstanceUpdate;
}
export interface WorldVanityUpdate {
  readonly characterID: string;
  readonly items?: WorldVanityItemsUpdate;
  readonly slot: VanitySlot;
  readonly vanityItemID?: string;
}
