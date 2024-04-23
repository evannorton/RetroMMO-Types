import { Color } from "../Color";
import { Definition } from "./Definition";

export interface LandscapeDefinition extends Definition {
  readonly imageSourceID: string;
  readonly shadowColor: Color;
}
