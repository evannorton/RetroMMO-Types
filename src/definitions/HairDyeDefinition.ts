import { Definition } from "./Definition";

export interface HairDyeDefinition extends Definition {
  readonly classIDs: readonly string[];
  readonly hairColorID: string;
  readonly isDefault?: boolean;
}
