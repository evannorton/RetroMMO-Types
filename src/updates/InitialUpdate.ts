import { CharacterUpdate } from "./CharacterUpdate";
import { MainState } from "../MainState";
import { Savefile } from "../Savefile";

export interface InitialWorldUpdate {
  readonly characterID: string;
  readonly characters: CharacterUpdate[];
}
export interface InitialUpdate {
  readonly isSubscribed: boolean;
  readonly mainState: MainState;
  readonly savefile: Savefile;
  readonly userID: number;
  readonly username: string;
  readonly world?: InitialWorldUpdate;
}
