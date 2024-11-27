import { Definition } from "./Definition";
import { Direction } from "../Direction";

export interface NPCDefinition extends Definition {
  readonly actorImageSourceID: string;
  readonly dialogue?: string;
  readonly encounterID?: string;
  readonly indicatorImageSourceID: string;
  readonly innCost?: number;
  readonly name: string;
  readonly questGiverID?: string;
  readonly shopID?: string;
  readonly startDirection: Direction;
}
