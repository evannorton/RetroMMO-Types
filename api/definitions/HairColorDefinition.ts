import { Color } from "../Color";
import { Definition } from "./Definition";

export interface HairColorDefinition extends Definition {
  readonly color1: Color;
  readonly color2: Color;
  readonly color3: Color;
}
