import { Direction } from "../../Direction";
import { Step } from "../../Step";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldMoveCharacterUpdate {
  readonly characterID: string;
  readonly direction: Direction;
  readonly isRenewing?: boolean;
  readonly order: number;
  readonly resources?: WorldResourcesUpdate;
  readonly step: Step;
}
export interface WorldMoveCharactersUpdate {
  readonly characters: readonly WorldMoveCharacterUpdate[];
  readonly clearedMarkerWorldCharacterIDs: string[];
  readonly reachableID: string;
}
