import { ItemInstanceUpdate } from "../../ItemInstanceUpdate";
import { WorldTradeItemRoomUpdate } from "./WorldTradeItemRoomUpdate";

export interface WorldTradeOfferItemUpdate {
  readonly itemInstance: ItemInstanceUpdate;
  readonly room: readonly [WorldTradeItemRoomUpdate, WorldTradeItemRoomUpdate];
  readonly characterID: string;
}
