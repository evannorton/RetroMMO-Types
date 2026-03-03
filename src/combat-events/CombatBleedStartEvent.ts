import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatBleedStartEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly order: number;
  readonly username?: string;
}
export interface CombatBleedStartEvent extends CombatEvent {
  readonly target: CombatBleedStartEventTarget;
  readonly type: CombatEventType.BleedStart;
}
