import { Definition } from "./Definition";

export interface EmoteDefinition extends Definition {
  backgroundImageSourceID: string;
  foregroundImageSourceID?: string;
}
