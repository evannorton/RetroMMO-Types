import { Definition } from "./Definition";

export interface ClothesDyeDefinition extends Definition {
  readonly primaryClothesColorID: string;
  readonly secondaryClothesColorID: string;
}
