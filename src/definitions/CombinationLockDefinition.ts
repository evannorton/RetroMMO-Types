import { Definition } from "./Definition";

export interface CombinationLockDefinition extends Definition {
  readonly imageSourceID: string;
  readonly noiseID: string;
}
