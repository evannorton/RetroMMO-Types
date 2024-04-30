import { Definition } from "./Definition";

export interface MaskDefinition extends Definition {
  readonly headCosmeticID: string;
  readonly classIDs: string[];
}
