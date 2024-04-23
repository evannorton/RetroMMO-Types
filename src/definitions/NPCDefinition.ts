import { Definition } from "./Definition";
import { Direction } from "../Direction";

export interface NPCDefinition extends Definition {
  readonly actorImageSourceID: string;
  readonly indicatorImageSourceID: string;
  readonly name: string;
  readonly startDirection: Direction;
}
