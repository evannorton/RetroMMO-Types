import { Direction } from "../../Direction";

export interface WorldMoveCharacterUpdate {
  readonly direction: Direction;
  readonly worldCharacterID: string;
}
