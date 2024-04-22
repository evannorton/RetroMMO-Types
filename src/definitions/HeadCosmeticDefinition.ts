import { Definition } from "./Definition";

export interface HeadCosmeticDefinition extends Definition {
  readonly backImageSourcesSlugs: {
    readonly [key: string]: string | undefined;
  };
  readonly frontImageSourcesSlugs: {
    readonly [key: string]: string;
  };
}
