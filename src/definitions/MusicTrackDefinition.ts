import { Definition } from "./Definition";

export interface MusicTrackDefinition extends Definition {
  readonly audioPath: string;
  readonly loopPoint?: number;
}
