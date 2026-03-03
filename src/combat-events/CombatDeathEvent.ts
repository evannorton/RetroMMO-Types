import { CombatEvent } from "./CombatEvent";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatDeathEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatDeathEvent extends CombatEvent {
  readonly target: CombatDeathEventTarget;
}
