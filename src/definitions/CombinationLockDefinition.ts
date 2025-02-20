import { Definition } from "./Definition";

export interface CombinationLockDefinition extends Definition {
  readonly imagePath: string;
  readonly noiseID: string;
}
