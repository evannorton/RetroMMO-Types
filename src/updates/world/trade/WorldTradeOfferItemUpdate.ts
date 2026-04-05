import { ItemInstanceUpdate } from "../../ItemInstanceUpdate";

export interface WorldTradeOfferItemUpdate {
  readonly itemInstance: ItemInstanceUpdate;
  readonly worldCharacterID: string;
}
