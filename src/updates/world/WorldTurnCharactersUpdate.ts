import { Direction } from "../../Direction";

export interface WorldTurnCharactersUpdateTurn {
  readonly direction: Direction;
  readonly worldCharacterID: string;
}
export interface WorldTurnCharactersUpdate {
  readonly turns: readonly WorldTurnCharactersUpdateTurn[];
}
