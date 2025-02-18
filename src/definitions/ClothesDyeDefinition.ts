import { Definition } from "./Definition";

export interface ClothesDyeDefinition extends Definition {
  readonly classIDs: readonly string[];
  readonly isDefault?: boolean;
  readonly primaryClothesColorID: string;
  readonly secondaryClothesColorID: string;
}
