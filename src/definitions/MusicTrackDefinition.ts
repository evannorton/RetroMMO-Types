import { Definition } from "./Definition";

export interface MusicTrackDefinition extends Definition {
  readonly audioSourceSlug: string;
  readonly loopPoint?: number;
}
