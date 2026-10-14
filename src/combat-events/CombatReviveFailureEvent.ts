import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatReviveFailureEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatReviveFailureEvent extends CombatEvent {
  readonly target: CombatReviveFailureEventTarget;
  readonly type: CombatEventType.ReviveFailure;
}
