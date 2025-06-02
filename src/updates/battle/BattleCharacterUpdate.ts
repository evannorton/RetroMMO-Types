export interface BattleCharacterUpdate {
  readonly battlerID: string;
  readonly characterID: string;
  readonly classID: string;
  readonly clothesDyeItemID?: string;
  readonly figureID: string;
  readonly hairDyeItemID?: string;
  readonly maskItemID?: string;
  readonly outfitItemID?: string;
  readonly playerID: string;
  readonly skinColorID: string;
}
