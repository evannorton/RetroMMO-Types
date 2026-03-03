import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatRejuvenateFailureEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatRejuvenateFailureEvent extends CombatEvent {
  readonly target: CombatRejuvenateFailureEventTarget;
  readonly type: CombatEventType.RejuvenateFailure;
}
