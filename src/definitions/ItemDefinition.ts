import { Definition } from "./Definition";

export interface ItemDefinition extends Definition {
  readonly clothesDyeSlug?: string;
  readonly hairDyeSlug?: string;
  readonly maskSlug?: string;
  readonly outfitSlug?: string;
}
