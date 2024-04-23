import { Definition } from "./Definition";

export interface BodyCosmeticDefinition extends Definition {
  readonly imageSourcesIDs: {
    readonly [key: string]: string;
  };
}
