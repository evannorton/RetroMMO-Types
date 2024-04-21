import { Definition } from "./Definition";

export interface BodyCosmeticDefinition extends Definition {
  readonly imageSourcesSlugs: {
    readonly [key: string]: string;
  };
}
