import { Definition } from "./Definition";

export interface HairDyeDefinition extends Definition {
  readonly hairColorSlug: string;
}
