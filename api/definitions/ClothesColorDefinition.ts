import { Color } from "../Color";
import { Definition } from "./Definition";

export interface ClothesColorDefinition extends Definition {
  readonly color1: Color;
  readonly color2: Color;
}
