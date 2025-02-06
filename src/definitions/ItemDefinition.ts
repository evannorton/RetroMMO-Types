import { Definition } from "./Definition";

export interface ItemDefinition extends Definition {
  readonly abilityID?: string;
  readonly characterCustomizeClothesDyeOrder?: [number, number];
  readonly characterCustomizeHairDyeOrder?: number;
  readonly characterCustomizeMaskOrder?: number;
  readonly characterCustomizeOutfitOrder?: number;
  readonly clothesDyeID?: string;
  readonly description?: string;
  readonly hairDyeID?: string;
  readonly maskID?: string;
  readonly name: string;
  readonly outfitID?: string;
}
