import { MainState } from "../MainState";
import { Savefile } from "../Savefile";

export interface InitialWorldUpdate {
  readonly characterID: string;
}
export interface InitialUpdate {
  readonly isSubscribed: boolean;
  readonly mainState: MainState;
  readonly savefile: Savefile;
  readonly world?: InitialWorldUpdate;
}
