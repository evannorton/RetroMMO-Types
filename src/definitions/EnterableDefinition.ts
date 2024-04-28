import { Definition } from "./Definition";

export interface EnterableDefinition extends Definition {
  readonly noiseID: string;
}
