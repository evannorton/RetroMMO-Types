import { Definition } from "./Definition";

export interface ClassDefinition extends Definition {
  readonly abbreviation: string;
  readonly description: string;
  readonly defaultClothesDyeItemSlug: string;
  readonly defaultFigureSlug: string;
  readonly defaultHairDyeItemSlug: string;
  readonly defaultMaskItemSlug: string;
  readonly defaultOutfitItemSlug: string;
  readonly defaultSkinColorSlug: string;
  readonly name: string;
}
