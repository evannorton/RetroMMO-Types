import { Definition } from "./Definition";

export interface TransportDefinition extends Definition {
  readonly noiseID?: string;
}
