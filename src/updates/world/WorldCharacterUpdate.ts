import { Direction } from "../../Direction";
import { Step } from "../../Step";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldCharacterUpdate {
  readonly classID: string;
  readonly clothesDyeItemID?: string;
  readonly direction: Direction;
  readonly figureID: string;
  readonly hairDyeItemID?: string;
  readonly id: string;
  readonly level: number;
  readonly maskItemID?: string;
  readonly openedChestIDs?: readonly string[];
  readonly order: number;
  readonly outfitItemID?: string;
  readonly partyID: string;
  readonly playerID: string;
  readonly resources?: WorldResourcesUpdate;
  readonly skinColorID: string;
  readonly step: Step;
  readonly tilemapID: string;
  readonly userID: number;
  readonly username: string;
  readonly x: number;
  readonly y: number;
}
