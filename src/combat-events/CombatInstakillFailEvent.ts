import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatInstakillFailEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatInstakillFailEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatInstakillFailEventTarget;
  readonly type: CombatEventType.InstakillFail;
}
