import { Definition } from "./Definition";

export interface ClothesDyeDefinition extends Definition {
  readonly primaryClothesColorSlug: string;
  readonly secondaryClothesColorSlug: string;
}
