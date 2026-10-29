import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatSoftenEndEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatSoftenEndEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatSoftenEndEventTarget;
  readonly type: CombatEventType.SoftenEnd;
}
