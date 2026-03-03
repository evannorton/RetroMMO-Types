import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatInstakillEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatInstakillEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatInstakillEventTarget;
  readonly type: CombatEventType.Instakill;
}
