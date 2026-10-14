import { CombatEvent } from "./CombatEvent";
import { CombatEventType } from "../CombatEventType";
import { MonsterNameData } from "../MonsterNameData";

export interface CombatReviveEventTarget {
  readonly battlerID?: string;
  readonly monsterName?: MonsterNameData;
  readonly username?: string;
}
export interface CombatReviveEvent extends CombatEvent {
  readonly abilityID: string;
  readonly amount: number;
  readonly target: CombatReviveEventTarget;
  readonly type: CombatEventType.Revive;
}
