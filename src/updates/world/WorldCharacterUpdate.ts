import { Direction } from "../../Direction";
import { MarkerType } from "../../MarkerType";
import { Step } from "../../Step";
import { WorldQuestInstanceUpdate } from "./WorldQuestInstanceUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldCharacterUpdate {
  readonly classID: string;
  readonly clothesDyeItemID?: string;
  readonly direction: Direction;
  readonly figureID: string;
  readonly hairDyeItemID?: string;
  readonly id: string;
  readonly isRenewing?: boolean;
  readonly level: number;
  readonly marker?: MarkerType;
  readonly maskItemID?: string;
  readonly openedChestIDs?: readonly string[];
  readonly order: number;
  readonly outfitItemID?: string;
  readonly partyID: string;
  readonly playerID: string;
  readonly questInstances?: Record<string, WorldQuestInstanceUpdate>;
  readonly resources?: WorldResourcesUpdate;
  readonly skinColorID: string;
  readonly step: Step;
  readonly tilemapID: string;
  readonly userID: number;
  readonly username: string;
  readonly x: number;
  readonly y: number;
}
