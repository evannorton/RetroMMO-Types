import { Definition } from "./Definition";

export interface HairDyeDefinition extends Definition {
  readonly hairColorID: string;
  readonly isDefault?: boolean;
}
