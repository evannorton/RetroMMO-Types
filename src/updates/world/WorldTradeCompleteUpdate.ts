import { ItemInstanceUpdate } from "../ItemInstanceUpdate";

export interface WorldTradeCompleteUpdate {
  readonly bagItemInstances: readonly ItemInstanceUpdate[];
  readonly gold: number;
}
