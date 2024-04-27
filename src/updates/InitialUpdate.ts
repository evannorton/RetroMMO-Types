import { MainState } from "../MainState";
import { Savefile } from "../Savefile";

export interface InitialUpdate {
  readonly mainState: MainState;
  readonly savefile: Savefile;
}
