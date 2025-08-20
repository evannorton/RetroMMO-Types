import { Definition } from "./Definition";
import { Direction } from "../Direction";

export interface NPCDefinition extends Definition {
  readonly actorImagePath: string;
  readonly dialogue?: string;
  readonly encounterID?: string;
  readonly indicatorImagePath: string;
  readonly innCost?: number;
  readonly name: string;
  readonly questExchangerID?: string;
  readonly shopID?: string;
  readonly startDirection: Direction;
}
