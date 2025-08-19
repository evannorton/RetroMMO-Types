import { Definition } from "./Definition";

export interface EmoteDefinition extends Definition {
  readonly backgroundImagePath: string;
  readonly foregroundImagePath?: string;
  readonly order: number;
  readonly requiresSubscription?: boolean;
}
