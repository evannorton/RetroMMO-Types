import { Definition } from "./Definition";

export interface TransportDefinition extends Definition {
  noiseSlug: string | null;
}
