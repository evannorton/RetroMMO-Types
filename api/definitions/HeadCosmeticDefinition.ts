import { Definition } from "./Definition";

export interface HeadCosmeticDefinition extends Definition {
  readonly backImageSourcesSlugs: {
    readonly [key: string]: string | null;
  };
  readonly frontImageSourcesSlugs: {
    readonly [key: string]: string;
  };
}
