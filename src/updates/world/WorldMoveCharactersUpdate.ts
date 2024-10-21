import { Direction } from "../../Direction";

export interface WorldMoveCharactersUpdateMove {
  readonly direction: Direction;
  readonly order: number;
  readonly worldCharacterID: string;
}
export interface WorldMoveCharactersUpdate {
  moves: readonly WorldMoveCharactersUpdateMove[];
}
