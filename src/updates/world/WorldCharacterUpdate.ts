import { Direction } from "../../Direction";
import { InviteType } from "../../InviteType";
import { Step } from "../../Step";
import { WorldQuestInstanceUpdate } from "./WorldQuestInstanceUpdate";
import { WorldResourcesUpdate } from "./WorldResourcesUpdate";

export interface WorldCharacterUpdateEmote {
  readonly emoteID: string;
  readonly sinceUsed: number;
}
export interface WorldCharacterUpdate {
  readonly bestiaryKills?: Readonly<Record<string, number>>;
  readonly characterID: string;
  readonly clothesDyeItemID?: string;
  readonly direction: Direction;
  readonly figureID: string;
  readonly emote?: WorldCharacterUpdateEmote;
  readonly hairDyeItemID?: string;
  readonly invite?: InviteType;
  readonly isPoisoned?: boolean;
  readonly isRenewing?: boolean;
  readonly maskItemID?: string;
  readonly openedChestIDs?: readonly string[];
  readonly order: number;
  readonly outfitItemID?: string;
  readonly playerID: string;
  readonly poisonOrder?: number;
  readonly questInstances?: Record<string, WorldQuestInstanceUpdate>;
  readonly renewOrder?: number;
  readonly resources?: WorldResourcesUpdate;
  readonly skinColorID: string;
  readonly step: Step;
  readonly tilemapID: string;
  readonly x: number;
  readonly y: number;
}
