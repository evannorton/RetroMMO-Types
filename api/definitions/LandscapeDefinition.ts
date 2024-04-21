import { Color } from "../Color";
import { Definition } from "./Definition";

export interface LandscapeDefinition extends Definition {
  readonly imageSourceSlug: string;
  readonly shadowColor: Color;
}
