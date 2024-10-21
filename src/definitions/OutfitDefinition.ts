import { Definition } from "./Definition";

export interface OutfitDefinition extends Definition {
  readonly bodyCosmeticID: string;
  readonly classIDs: readonly string[];
  readonly isDefault?: boolean;
}
