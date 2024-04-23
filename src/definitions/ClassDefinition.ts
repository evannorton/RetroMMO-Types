import { Definition } from "./Definition";

export interface ClassDefinition extends Definition {
  readonly abbreviation: string;
  readonly description: string;
  readonly defaultClothesDyeItemID: string;
  readonly defaultFigureID: string;
  readonly defaultHairDyeItemID: string;
  readonly defaultMaskItemID: string;
  readonly defaultOutfitItemID: string;
  readonly defaultSkinColorID: string;
  readonly name: string;
  readonly order: number;
}
