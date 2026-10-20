import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatPoisonEndEventTarget {
  readonly battlerID?: string;
  readonly characterID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatPoisonEndEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatPoisonEndEventTarget;
  readonly type: CombatEventType.PoisonEnd;
}
