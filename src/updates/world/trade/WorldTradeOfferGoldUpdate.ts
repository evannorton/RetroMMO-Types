import { WorldTradeGoldRoomUpdate } from "./WorldTradeGoldRoomUpdate";

export interface WorldTradeOfferGoldUpdate {
  readonly amount: number;
  readonly room: readonly [WorldTradeGoldRoomUpdate, WorldTradeGoldRoomUpdate];
  readonly worldCharacterID: string;
}
