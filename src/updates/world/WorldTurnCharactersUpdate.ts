import { Direction } from "../../Direction";

export interface WorldTurnCharactersUpdateTurn {
  readonly characterID: string;
  readonly direction: Direction;
}
export interface WorldTurnCharactersUpdate {
  readonly turns: readonly WorldTurnCharactersUpdateTurn[];
}
