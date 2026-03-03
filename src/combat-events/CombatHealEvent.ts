import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "./CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatHealEventTarget {
  readonly battlerID?: string;
  readonly characterID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatHealEvent extends CombatEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly target: CombatHealEventTarget;
  readonly type: CombatEventType.Heal;
}
