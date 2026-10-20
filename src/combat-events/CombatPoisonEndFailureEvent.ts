import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatPoisonEndFailureEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatPoisonEndFailureEvent extends CombatEvent {
  readonly target: CombatPoisonEndFailureEventTarget;
  readonly type: CombatEventType.PoisonEndFailure;
}
