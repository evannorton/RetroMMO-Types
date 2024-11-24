import { PianoKeyType } from "../../PianoKeyType";

export interface WorldPianoKeyRequest {
  readonly index: number;
  readonly sinceLastKey?: number;
  readonly type: PianoKeyType;
}
