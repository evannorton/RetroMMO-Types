import { Definition } from "./Definition";

export interface ChestDefinition extends Definition {
  readonly countsTowardTotal?: boolean;
  readonly gold?: number;
  readonly imagePath: string;
  readonly itemID?: string;
}
