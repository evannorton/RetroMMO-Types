export interface MainMenuCharacterUpdate {
  readonly characterID: string;
  readonly classID: string;
  readonly clothesDyeItemID?: string;
  readonly figureID: string;
  readonly hairDyeItemID?: string;
  readonly level: number;
  readonly maskItemID?: string;
  readonly outfitItemID?: string;
  readonly skinColorID: string;
}
