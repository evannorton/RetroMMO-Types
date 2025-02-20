import { Definition } from "./Definition";

export interface HeadCosmeticDefinition extends Definition {
  readonly backImagePaths: {
    readonly [key: string]: string | undefined;
  };
  readonly frontImagePaths: {
    readonly [key: string]: string;
  };
}
