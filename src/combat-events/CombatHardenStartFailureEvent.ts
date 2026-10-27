import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatHardenStartFailureEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatHardenStartFailureEvent extends CombatEvent {
  readonly target: CombatHardenStartFailureEventTarget;
  readonly type: CombatEventType.HardenStartFailure;
}
