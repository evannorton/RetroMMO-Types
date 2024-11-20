import { VanitySlot } from "../../VanitySlot";

export interface WorldVanityUpdate {
  readonly slot: VanitySlot;
  readonly vanityItemID?: string;
  readonly worldCharacterID: string;
}
