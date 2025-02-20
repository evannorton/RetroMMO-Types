import { Definition } from "./Definition";

export interface BodyCosmeticDefinition extends Definition {
  readonly imagePaths: {
    readonly [key: string]: string;
  };
}
