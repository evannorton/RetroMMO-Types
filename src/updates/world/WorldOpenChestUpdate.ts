import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldOpenChestUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly chestID: string;
  readonly inventoryGold: number;
}
