import { Direction } from "../../Direction";

export interface WorldNPCUpdate {
  readonly direction: Direction;
  readonly npcID: string;
}
