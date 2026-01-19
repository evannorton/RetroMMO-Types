import { ItemInstanceUpdate } from "../../ItemInstanceUpdate";

export interface WorldShopBuyItemUpdate {
  readonly itemInstance: ItemInstanceUpdate;
  readonly gold: number;
}
