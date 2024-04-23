import { Definition } from "./Definition";

export interface ItemDefinition extends Definition {
  readonly clothesDyeID?: string;
  readonly hairDyeID?: string;
  readonly maskID?: string;
  readonly outfitID?: string;
}
