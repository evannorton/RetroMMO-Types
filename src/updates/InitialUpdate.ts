import { MainState } from "../MainState";
import { Savefile } from "../Savefile";

export interface InitialWorldUpdateCharacter {
  readonly id: string;
  readonly username: string;
}
export interface InitialWorldUpdate {
  readonly characterID: string;
  readonly characters: InitialWorldUpdateCharacter[];
}
export interface InitialUpdate {
  readonly isSubscribed: boolean;
  readonly mainState: MainState;
  readonly savefile: Savefile;
  readonly world?: InitialWorldUpdate;
}
