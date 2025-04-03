import { MarkerType } from "../../MarkerType";

export interface WorldMarkerUpdate {
  readonly characterID: string;
  readonly type: MarkerType;
}
