import { Definition } from "./Definition";

export interface HeadCosmeticDefinition extends Definition {
  readonly backImageSourcesIDs: {
    readonly [key: string]: string | undefined;
  };
  readonly frontImageSourcesIDs: {
    readonly [key: string]: string;
  };
}
