import { Definition } from "./Definition";
import { Direction } from "../Direction";

export interface NPCDefinition extends Definition {
  readonly actorImageSourceSlug: string;
  readonly indicatorImageSourceSlug: string;
  readonly name: string;
  readonly startDirection: Direction;
}
