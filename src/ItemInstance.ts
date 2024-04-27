export interface ItemInstanceTrade {
  readonly tradedAt: number;
  readonly traderUserID: number;
}
export interface ItemInstance {
  readonly bankSpawnedAt: number | null;
  readonly customizedAt: number | null;
  readonly droppedAt: number | null;
  readonly itemID: string;
  readonly openedAt: number | null;
  readonly origin: string;
  readonly purchasedAt: number | null;
  readonly id: string;
  readonly trades: ItemInstanceTrade[];
}
