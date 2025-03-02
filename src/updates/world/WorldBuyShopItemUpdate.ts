import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldBuyShopItemUpdate {
  readonly itemInstance: ItemInstanceUpdate;
  readonly gold: number;
}
