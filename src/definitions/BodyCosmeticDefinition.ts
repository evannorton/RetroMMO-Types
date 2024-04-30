import { Definition } from "./Definition";

export interface BodyCosmeticDefinition extends Definition {
  readonly imageSourceIDs: {
    readonly [key: string]: string;
  };
}
