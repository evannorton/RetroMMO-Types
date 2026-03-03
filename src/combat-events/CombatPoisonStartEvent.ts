import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatPoisonStartEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly order: number;
  readonly username?: string;
}
export interface CombatPoisonStartEvent extends CombatEvent {
  readonly target: CombatPoisonStartEventTarget;
  readonly type: CombatEventType.PoisonStart;
}
