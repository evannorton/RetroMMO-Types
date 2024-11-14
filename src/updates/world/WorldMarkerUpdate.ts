import { MarkerType } from "../../MarkerType";

export interface WorldMarkerUpdate {
  readonly type: MarkerType;
  readonly worldCharacterID: string;
}
