import { Direction } from "../../Direction";

export interface WorldMoveCharacterUpdate {
  readonly direction: Direction;
  readonly order: number;
  readonly worldCharacterID: string;
}
