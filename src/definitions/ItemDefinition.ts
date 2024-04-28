import { Definition } from "./Definition";

export interface ItemDefinition extends Definition {
  readonly characterCustomizeClothesDyeOrder?: [number, number];
  readonly characterCustomizeHairDyeOrder?: number;
  readonly characterCustomizeMaskOrder?: number;
  readonly characterCustomizeOutfitOrder?: number;
  readonly clothesDyeID?: string;
  readonly hairDyeID?: string;
  readonly maskID?: string;
  readonly outfitID?: string;
}
