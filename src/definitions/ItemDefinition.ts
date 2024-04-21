import { Definition } from "./Definition";

export interface ItemDefinition extends Definition {
  readonly clothesDyeSlug: string | null;
  readonly hairDyeSlug: string | null;
  readonly maskSlug: string | null;
  readonly outfitSlug: string | null;
}
