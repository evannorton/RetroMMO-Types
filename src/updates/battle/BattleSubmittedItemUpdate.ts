export interface BattleSubmittedItemUpdate {
  readonly casterBattlerID: string;
  readonly itemID: string;
  readonly targetBattlerID?: string;
}
