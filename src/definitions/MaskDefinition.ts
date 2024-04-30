import { Definition } from "./Definition";

export interface MaskDefinition extends Definition {
  readonly classIDs: string[];
  readonly headCosmeticID: string;
  readonly isDefault?: boolean;
}
