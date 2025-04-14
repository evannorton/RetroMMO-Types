import { BattleResourcesUpdate } from "./BattleResourcesUpdate";

export interface BattleCharacterUpdate {
  readonly characterID: string;
  readonly clothesDyeItemID?: string;
  readonly figureID: string;
  readonly hairDyeItemID?: string;
  readonly maskItemID?: string;
  readonly outfitItemID?: string;
  readonly playerID: string;
  readonly resources?: BattleResourcesUpdate;
  readonly skinColorID: string;
}
