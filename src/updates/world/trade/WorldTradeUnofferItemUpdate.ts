import { WorldTradeItemRoomUpdate } from "./WorldTradeItemRoomUpdate";

export interface WorldTradeUnofferItemUpdate {
  readonly itemInstanceID: string;
  readonly room: readonly [WorldTradeItemRoomUpdate, WorldTradeItemRoomUpdate];
  readonly worldCharacterID: string;
}
