import { Definition } from "./Definition";

export interface MusicTrackDefinition extends Definition {
  readonly audioSourceID: string;
  readonly loopPoint?: number;
}
