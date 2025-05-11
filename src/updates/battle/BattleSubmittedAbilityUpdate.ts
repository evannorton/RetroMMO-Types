export interface BattleSubmittedAbilityUpdate {
  readonly abilityID: string;
  readonly casterBattlerID: string;
  readonly targetBattlerID?: string;
}
