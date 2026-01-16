export interface ShopDefinition {
  readonly indicatorImagePath: string;
  readonly shopItems: readonly ShopItemDefinition[];
}
export interface ShopItemDefinition {
  readonly cost: number;
  readonly itemID: string;
}
