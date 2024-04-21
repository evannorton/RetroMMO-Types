import { Definition } from "./Definition";

export interface CombinationLockDefinition extends Definition {
  readonly imageSourceSlug: string;
  readonly noiseSlug: string;
}
