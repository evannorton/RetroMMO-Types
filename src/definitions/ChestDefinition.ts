import { Definition } from "./Definition";

export interface ChestDefinition extends Definition {
  readonly countsTowardTotal?: boolean;
  readonly imagePath: string;
}
