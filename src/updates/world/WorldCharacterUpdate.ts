import { Direction } from "../../Direction";
import { MarkerType } from "../../MarkerType";
import { Step } from "../../Step";
import { WorldQuestInstanceUpdate } from "./WorldQuestInstanceUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldCharacterUpdateEmote {
  readonly emoteID: string;
  readonly sinceUsed: number;
}
export interface WorldCharacterUpdate {
  readonly characterID: string;
  readonly clothesDyeItemID?: string;
  readonly direction: Direction;
  readonly figureID: string;
  readonly emote?: WorldCharacterUpdateEmote;
  readonly hairDyeItemID?: string;
  readonly isRenewing?: boolean;
  readonly marker?: MarkerType;
  readonly maskItemID?: string;
  readonly openedChestIDs?: readonly string[];
  readonly order: number;
  readonly outfitItemID?: string;
  readonly playerID: string;
  readonly questInstances?: Record<string, WorldQuestInstanceUpdate>;
  readonly resources?: WorldResourcesUpdate;
  readonly skinColorID: string;
  readonly step: Step;
  readonly tilemapID: string;
  readonly x: number;
  readonly y: number;
}
