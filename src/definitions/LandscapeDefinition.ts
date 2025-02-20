import { Color } from "../Color";
import { Definition } from "./Definition";

export interface LandscapeDefinition extends Definition {
  readonly imagePath: string;
  readonly shadowColor: Color;
}
