import { Definition } from "./Definition";

export interface HeadCosmeticDefinition extends Definition {
  readonly backImageSourceIDs: {
    readonly [key: string]: string | undefined;
  };
  readonly frontImageSourceIDs: {
    readonly [key: string]: string;
  };
}
