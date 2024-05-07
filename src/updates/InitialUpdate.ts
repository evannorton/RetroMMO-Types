import { MainState } from "../MainState";
import { Savefile } from "../Savefile";

export interface InitialUpdate {
  readonly isSubscribed: boolean;
  readonly mainState: MainState;
  readonly savefile: Savefile;
}
