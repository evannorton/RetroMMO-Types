import { Direction } from "../../Direction";
import { Step } from "../../Step";

export interface WorldMoveCharactersUpdateMove {
  readonly direction: Direction;
  readonly order: number;
  readonly step: Step;
  readonly worldCharacterID: string;
}
export interface WorldMoveCharactersUpdate {
  readonly clearedMarkerWorldCharacterIDs: string[];
  readonly moves: readonly WorldMoveCharactersUpdateMove[];
}
