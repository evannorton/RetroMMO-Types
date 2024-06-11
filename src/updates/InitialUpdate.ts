import { MainState } from "../MainState";
import { Savefile } from "../Savefile";
import { WorldCharacterUpdate } from "./world/WorldCharacterUpdate";

export interface InitialWorldUpdate {
  readonly characterID: string;
  readonly characters: WorldCharacterUpdate[];
}
export interface InitialUpdate {
  readonly isSubscribed: boolean;
  readonly mainState: MainState;
  readonly savefile: Savefile;
  readonly userID: number;
  readonly username: string;
  readonly world?: InitialWorldUpdate;
}
