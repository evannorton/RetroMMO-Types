import { Definition } from "./Definition";

export interface ClothesDyeDefinition extends Definition {
  readonly isDefault?: boolean;
  readonly primaryClothesColorID: string;
  readonly secondaryClothesColorID: string;
}
