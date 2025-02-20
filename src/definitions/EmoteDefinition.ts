import { Definition } from "./Definition";

export interface EmoteDefinition extends Definition {
  backgroundImagePath: string;
  foregroundImagePath?: string;
  order: number;
  requiresSubscription?: boolean;
}
