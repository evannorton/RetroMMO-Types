import { Direction } from "../../Direction";
import { Step } from "../../Step";
import { WorldInvitePromptsUpdate } from "./invites/WorldInvitePromptsUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldMoveCharacterUpdate {
  readonly characterID: string;
  readonly direction: Direction;
  readonly isPoisoned?: boolean;
  readonly isRenewing?: boolean;
  readonly order: number;
  readonly resources?: WorldResourcesUpdate;
  readonly step: Step;
}
export interface WorldMoveCharactersUpdate {
  readonly characters: readonly WorldMoveCharacterUpdate[];
  readonly invites?: WorldInvitePromptsUpdate;
  readonly reachableID: string;
}
