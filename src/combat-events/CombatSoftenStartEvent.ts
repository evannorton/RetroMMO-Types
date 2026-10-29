import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatSoftenStartEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly order: number;
  readonly username?: string;
}
export interface CombatSoftenStartEvent extends CombatEvent {
  readonly abilityID: string;
  readonly target: CombatSoftenStartEventTarget;
  readonly type: CombatEventType.SoftenStart;
}
