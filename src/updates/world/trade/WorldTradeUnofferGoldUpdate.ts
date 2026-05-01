import { WorldTradeGoldRoomUpdate } from "./WorldTradeGoldRoomUpdate";

export interface WorldTradeUnofferGoldUpdate {
  readonly room: readonly [WorldTradeGoldRoomUpdate, WorldTradeGoldRoomUpdate];
  readonly characterID: string;
}
