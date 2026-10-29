import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatSoftenStartFailureEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatSoftenStartFailureEvent extends CombatEvent {
  readonly target: CombatSoftenStartFailureEventTarget;
  readonly type: CombatEventType.SoftenStartFailure;
}
