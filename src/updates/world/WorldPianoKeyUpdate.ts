import { PianoKeyType } from "../../PianoKeyType";

export interface WorldPianoKeyUpdate {
  readonly index: number;
  readonly pianoSessionID: string;
  readonly sinceLastKey?: number;
  readonly type: PianoKeyType;
}
