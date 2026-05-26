import { Definition } from "./Definition";

export interface ReadableDefinition extends Definition {
  readonly color: string;
  readonly contents: string;
  readonly height: number;
  readonly horizontalAlignment: "center" | "left" | "right";
  readonly imagePath: string;
  readonly interactText: string;
}
