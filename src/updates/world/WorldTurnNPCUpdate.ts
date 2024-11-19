import { Direction } from "../../Direction";

export interface WorldTurnNPCUpdate {
  direction: Direction;
  npcID: string;
  wasInteracted?: boolean;
}
