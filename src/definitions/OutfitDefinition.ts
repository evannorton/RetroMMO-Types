import { Definition } from "./Definition";

export interface OutfitDefinition extends Definition {
  readonly bodyCosmeticID: string;
  readonly classIDs: string[];
  readonly isDefault?: boolean;
}
