import { Direction } from "../../Direction";
import { Step } from "../../Step";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldMoveCharacterUpdate {
  readonly direction: Direction;
  readonly order: number;
  readonly resources?: WorldResourcesUpdate;
  readonly step: Step;
  readonly worldCharacterID: string;
}
export interface WorldMoveCharactersUpdate {
  readonly clearedMarkerWorldCharacterIDs: string[];
  readonly worldCharacters: readonly WorldMoveCharacterUpdate[];
}
