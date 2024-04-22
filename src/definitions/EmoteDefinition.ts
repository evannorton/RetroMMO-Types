import { Definition } from "./Definition";

export interface EmoteDefinition extends Definition {
  backgroundImageSourceSlug: string;
  foregroundImageSourceSlug?: string;
}
